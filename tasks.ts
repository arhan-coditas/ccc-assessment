import { File } from "./file.type";
import { Action } from "./action.type";

const fileUpload = async (file: File) => {
  try {
    const fileUploaded = await this.upload(file);
    if (fileUploaded) {
      return true;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const fileDownload = async () => {
  try {
    const retrievedFile = await this.download();
    if (retrievedFile) {
      return retrievedFile;
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

const manageFile = async (file: File, action: Action) => {
  if (action === "DELETE") {
    const deletedFile = await this.deleteFile(file);
    if (deletedFile) {
      return true;
    }
  }

  if (action === "RENAME") {
    const renamedFile = await this.renameFile(file);
    if (renamedFile) {
      return true;
    }
  }

  if (action === "MOVE") {
    const movedFile = await this.moveFile(file);
    if (movedFile) {
      return true;
    }
  }
};
