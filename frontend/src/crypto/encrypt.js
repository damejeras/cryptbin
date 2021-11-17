export async function encrypt(content, password) {
    const encoder = new TextEncoder();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const passwordKey = await window.crypto.subtle.importKey(
        "raw",
        encoder.encode(password), { name: "PBKDF2" },
        false, ["deriveBits", "deriveKey"]
    );
    const aesKey = await window.crypto.subtle.deriveKey({
            name: "PBKDF2",
            salt: salt,
            iterations: 250000,
            hash: "SHA-256",
        },
        passwordKey, { name: "AES-GCM", length: 256 },
        false, ["encrypt"]
    );
    const encryptedContent = await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: iv,
        },
        aesKey,
        encoder.encode(content)
    );

    const encryptedContentArr = new Uint8Array(encryptedContent);
    let buffer = new Uint8Array(
        salt.byteLength + iv.byteLength + encryptedContentArr.byteLength
    );
    buffer.set(salt, 0);
    buffer.set(iv, salt.byteLength);
    buffer.set(encryptedContentArr, salt.byteLength + iv.byteLength);

    return btoa(String.fromCharCode.apply(null, buffer));
}