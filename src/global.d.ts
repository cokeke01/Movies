// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StringSchema } from 'yup';

declare module 'yup' {
  class StringSchema {
    firstLetterUppercase(): this;
  }
}

//file was created because of the Validation of FirstLetterUppercase
