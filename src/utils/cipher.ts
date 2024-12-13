export function encodeMessage(message: string): string {
  return message
    .toUpperCase()
    .split(' ')
    .map(word => 
      word
        .split('')
        .map(letter => {
          const code = letter.charCodeAt(0) - 64;
          return code.toString().padStart(2, '0');
        })
        .join('')
    )
    .join('_');
}

export function decodeMessage(code: string): string {
  return code
    .split('_')
    .map(word => 
      word.match(/.{1,2}/g)?.map(num => 
        String.fromCharCode(parseInt(num) + 64)
      ).join('')
    )
    .join('');  // Remove space joining
}

// Add a comparison function for validation
export function compareMessages(input: string, expected: string): boolean {
  const sanitized = input.toUpperCase().replace(/\s+/g, '');
  const expectedSanitized = expected.toUpperCase().replace(/\s+/g, '');
  return sanitized === expectedSanitized;
}

export const secretCode = "10_21_12_09_15";

// Test cases:
// compareMessages("JULIO", decodeMessage(secretCode)) // true
// compareMessages("J U L I O", decodeMessage(secretCode)) // true
// compareMessages("julio", decodeMessage(secretCode)) // true