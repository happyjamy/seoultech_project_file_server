import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuid } from 'uuid';

export const multerOpt = {
  storage: diskStorage({
    destination: (request, file, cb) => {
      const uploadPath = 'file/public';

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }

      cb(null, uploadPath);
    },

    filename: (request, file, callback) => {
      const uuid44 = uuid();
      const saveName = `${uuid44}${extname(file.originalname)}`;
      callback(null, saveName);
    },
  }),
};
