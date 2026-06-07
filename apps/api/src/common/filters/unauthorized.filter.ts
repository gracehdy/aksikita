import {
  ExceptionFilter,
  Catch,
  UnauthorizedException,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const logPath = path.join(process.cwd(), 'security_denied.log');

    const logMessage = `${new Date().toISOString()} | DENIED: ${request.method} ${request.url}\n`;
    const authHeader = request.headers['authorization'];
    if (authHeader && !authHeader.startsWith('Bearer ')) {
      fs.appendFileSync(
        'token_failure.log',
        `${new Date().toISOString()} | INVALID_FORMAT: ${authHeader}\n`,
      );
    } else {
      fs.appendFileSync(
        'token_failure.log',
        `${new Date().toISOString()} | INVALID_TOKEN: Unauthorized access attempt\n`,
      );
    }

    fs.appendFileSync(logPath, logMessage);
    response.status(401).json({
      message: 'Unauthorized access',
      statusCode: 401,
    });
  }
}
