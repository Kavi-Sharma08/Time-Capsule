import React, { useState, useEffect } from "react";
import { ID, Query, Permission, Role } from "appwrite";
import { storage, databases, account } from "../appwrite/appwriteConfig";
import config from "../config/config";
import { DateTime } from "luxon";

const Profile = () => {
  const [selectedDate, setSelectedDate] = useState(DateTime.now().toISODate());
  const [selectedTime, setSelectedTime] = useState(DateTime.now().toFormat("HH:mm"));
  const [emotionText, setEmotionText] = useState(""); // Store user emotions
  const [visibleImages, setVisibleImages] = useState([]); // Stores unlocked images

  const DATABASE_ID = config.appwriteDatabaseId;
  const COLLECTION_ID = config.appwriteCollectionId;
  const BUCKET_ID = config.appwriteBucketId;

  // Handle Date Change
  const handleDateChange = (event) => setSelectedDate(event.target.value);

  // Handle Time Change
  const handleTimeChange = (event) => setSelectedTime(event.target.value);

  // Handle Image Upload
  const handleImageUpload = async (event) => {
    const files = event.target.files;
    if (!files.length) return;

    try {
      const user = await account.get(); // Get current user

      for (const file of files) {
        // Upload file to Appwrite Storage
        const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
        console.log("File uploaded:", response);

        // Store File ID in the Database
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
          fileId: response.$id, // Store File ID instead of preview URL
          unlockTime: `${selectedDate} ${selectedTime}`,
          emotion: emotionText,
        }, [
          Permission.read(Role.any()), // Allow public access
          Permission.write(Role.user(user.$id)), // Owner can modify
        ]);

        console.log("Metadata stored in database");
      }
    } catch (error) {
      console.error("Upload Error:", error.message);
    }
  };

  // Fetch Unlocked Images From Database
  const fetchUnlockedImages = async () => {
    try {
      const now = DateTime.now().toFormat("yyyy-MM-dd HH:mm");

      // Query database for images whose unlock time is <= current time
      const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
        Query.lessThanEqual("unlockTime", now),
      ]);

      // Convert File IDs to accessible URLs
      const imagesWithUrls = response.documents.map((img) => ({
        ...img,
        imageUrl: storage.getFileView(BUCKET_ID, img.fileId), // Generate correct URL
      }));

      setVisibleImages(imagesWithUrls);
    } catch (error) {
      console.error("Fetch Error:", error.message);
    }
  };

  // Periodically check for unlocked images
  useEffect(() => {
    const interval = setInterval(fetchUnlockedImages, 5000); // Check every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
    
      <h2 className="text-xl font-semibold mb-4">Upload Multiple Images for Future Dates & Times</h2>

      {/* Date Picker */}
      <label className="block font-medium">Select Date:</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border p-2 rounded-md w-full mb-2"
      />

      {/* Time Picker */}
      <label className="block font-medium">Select Time:</label>
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        className="border p-2 rounded-md w-full mb-2"
      />

      {/* Emotion Input */}
      <label className="block font-medium">Your Thoughts/Emotions:</label>
      <textarea
        value={emotionText}
        onChange={(e) => setEmotionText(e.target.value)}
        className="border p-2 rounded-md w-full mb-2"
        placeholder="Write about your memory..."
      />

      {/* File Upload */}
      <label className="block font-medium">Upload Images:</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="border p-2 rounded-md w-full"
      />

      {/* Display Unlocked Images & Emotions */}
      <div className="mt-6">
        <h3 className="text-lg font-medium">Unlocked Images</h3>
        {visibleImages.length === 0 ? (
          <p className="text-gray-500">No images unlocked yet.</p>
        ) : (
          visibleImages.map((img) => (
            <div key={img.$id} className="mt-4 p-2 border rounded-md shadow-md">
              <h4 className="font-bold text-blue-600">{img.unlockTime}</h4>
              <img src={img.imageUrl} alt="Unlocked" className="w-full h-48 object-cover rounded-md mb-2" />
              <p className="text-gray-700 italic">"{img.emotion}"</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
