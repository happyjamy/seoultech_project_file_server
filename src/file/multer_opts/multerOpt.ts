import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { uuid4 } from 'uuid4';

export const multerOpt = {
  storage: diskStorage({
    destination: (request, file, cb) => {
      const uploadPath = 'public';

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }

      cb(null, uploadPath);
    },

    filename: (request, file, callback) => {
      const uuid = uuid4();
      const saveName = `${uuid}${extname(file.originalname)}`;
      callback(null, saveName);
    },
  }),
};
