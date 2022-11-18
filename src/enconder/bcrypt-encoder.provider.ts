import * as bcrypt from 'bcrypt';

import { IEnconderProvider } from '../application/providers/enconder.provider';

export class BcryptEncoderProvider implements IEnconderProvider {
  private readonly rounds: number = 8;

  async encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
