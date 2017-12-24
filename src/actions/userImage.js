import {
  START_UPLOAD,
  SET_UPLOAD_PROGRESS,
  COMPLETE_UPLOAD
} from "../constants";

import { storage } from "./../config/firebase";

const imagesRef = storage.ref("user-images");
let userImagesStorageRef;

export const startUploadImage = () => ({
  type: START_UPLOAD
});

export const setImageUploadProgress = (trasferred, total) => ({
  type: SET_UPLOAD_PROGRESS,
  payload: trasferred / total * 100
});

export const completeImageUpload = () => ({
  type: COMPLETE_UPLOAD
});

export const uploadImage = (file, user);

export const listenForImageUpload = uid => dispatch => {
  userImagesStorageRef = imagesRef.child(uid);

  userExpensesRef.on("child_added", snapshot => {
    dispatch(addExpense(snapshot.val()));
  });
};
