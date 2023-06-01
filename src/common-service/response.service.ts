import { Injectable } from '@nestjs/common';

import { Response } from 'express';

@Injectable()
export class ResponseService {
  sent(res: Response, code: number, data: any, message?: any) {
    switch (code) {
      case 200:
        res.status(code).send({
          success: true,
          message: message ? message : 'Success',
          data,
        });
        break;
      case 201:
        res.status(code).send({
          success: true,
          message: message ? message : 'Created',
          data,
        });
        break;
      case 400:
        res.status(code).send({
          success: false,
          message: message ? message : 'Bad Request',
        });
        break;
      case 401:
        res.status(code).send({
          success: false,
          message: message ? message : 'Unauthorized',
        });
        break;
      case 404:
        res.status(code).send({
          success: false,
          message: message ? message : 'Not Found',
        });
        break;
      case 409:
        res.status(code).send({
          success: false,
          message: message ? message : 'Duplicate data found',
        });
        break;
      case 500:
        res.status(code).send({
          success: false,
          message: message ? message : 'Internal Error',
        });
        break;
      case 503:
        res.status(code).send({
          success: false,
          message: message ? message : 'Service Unavailable',
        });
        break;
      default:
        res.status(500).send({
          success: false,
          message: 'Something Went Wrong',
        });
    }
  }
}
