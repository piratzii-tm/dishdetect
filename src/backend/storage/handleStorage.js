import * as ImageManipulator from "expo-image-manipulator/";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config";

export const handleStorage = async ({ uri }) => {
  console.log("Handling the image taken by the user using Firebase Storage...");
  let imageName = uri.split("/");
  imageName = imageName[imageName.length - 1];

  let resizedImage = await ImageManipulator.manipulateAsync(
    uri,
    [{ resize: { width: 300, height: 600 } }],
    { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG },
  );

  const imagesRef = ref(storage, `images/${imageName}`);
  const photo = await fetch(resizedImage.uri);
  const blob = await photo.blob();

  return await uploadBytes(imagesRef, blob).then((snapshot) =>
    getDownloadURL(snapshot.ref),
  );
};
