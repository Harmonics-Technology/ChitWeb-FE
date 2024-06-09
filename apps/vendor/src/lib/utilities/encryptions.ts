// ts-nocheck

import forge from 'node-forge';

// read public key from file
export default class EncryptionService {
  publicKey: forge.pki.PublicKey | null;

  privateKey: forge.pki.PrivateKey | null;

  constructor() {
    this.publicKey = null;
    this.privateKey = null;
  }

  static async fetchPublicKey(): Promise<string> {
    const response = await fetch(
      'http://localhost:3001/RSAKeys/self_public_key.pem'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  }

  static async fetchPrivateKey(): Promise<string> {
    const response = await fetch(
      'http://localhost:3001/RSAKeys/self_private_key.pem'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  }

  async initializeKeys(): Promise<void> {
    const publicKeyFileContent = await EncryptionService.fetchPublicKey();
    const privateKeyFileContent = await EncryptionService.fetchPrivateKey();

    this.publicKey = forge.pki.publicKeyFromPem(publicKeyFileContent);
    this.privateKey = forge.pki.privateKeyFromPem(privateKeyFileContent);
  }

  //  async encryptData(data: string): Promise<string> {
  //     if (!this.publicKey) {
  //         await this.initializeKeys();
  //     }
  //     // ts-ignore
  //     return this?.publicKey?.encrypt(data);
  // }

  //  async decryptData(data: string): Promise<string> {
  //     if (!this.privateKey) {
  //         await this.initializeKeys();
  //     }
  //     // ts-ignore
  //     return this.privateKey?.decrypt(data);
  // }

  // add encryption and decryption with aes symentric algorithm

  // encrypt data with aes
  static async encryptDataWithAES(data: string): Promise<string> {
    const key = forge.random.getBytesSync(32);
    const iv = forge.random.getBytesSync(16);
    const cipher = forge.cipher.createCipher('AES-CBC', key);
    cipher.start({ iv });
    cipher.update(forge.util.createBuffer(data));
    cipher.finish();
    const encrypted = cipher.output;
    const encoded = forge.util.encode64(encrypted.getBytes());
    return forge.util.encode64(
      `${forge.util.encode64(iv)}||${encoded}||${forge.util.encode64(key)}`
    );
  }

  // decrypt data with aes
  static async decryptDataWithAES(data: string): Promise<string> {
    const encodedString = forge.util.decode64(data);
    const iv = forge.util.decode64(encodedString.split('||')[0]);
    const encrypted = forge.util.decode64(encodedString.split('||')[1]);
    const key = forge.util.decode64(encodedString.split('||')[2]);
    const decipher = forge.cipher.createDecipher('AES-CBC', key);
    decipher.start({ iv });
    decipher.update(forge.util.createBuffer(encrypted));
    decipher.finish();
    return decipher.output.toString();
  }
}
