# Social Profile Scraping

A simple library to scrape public profiles from social platforms like WhatsApp.

## Features

- Scrapes public WhatsApp profiles.
- Easy-to-use API with async/await support.
- Modular design for adding future scrapers (e.g., Facebook, Instagram).

---

## Installation

Install the package via npm or yarn:

```bash
npm install social-profile-scraping
# or
yarn add social-profile-scraping
```

---

## Usage

Here is an example of how to use the library to scrape a public WhatsApp profile:

```javascript
import { SocialScrapper } from "social-profile-scraping";

const test = async () => {
  try {
    const data = await SocialScrapper.whatsapp("5511000000000"); // Replace with a valid phone number
    console.log(data);
  } catch (error) {
    console.error("Error scraping:", error);
  }
};

test();
```

### Example Response

```json
{
  "picture": "https://example.com/profile-picture.jpg",
  "username": "John Doe",
  "phone": "5511000000000"
}
```

---

## API Reference

### `SocialScrapper.whatsapp(phone: string): Promise<Object>`

Scrapes a public WhatsApp profile.

#### Parameters:
- `phone` (string): The phone number in international format (e.g., `5511000000000`).

#### Returns:
A Promise resolving to an object containing:
- `picture` (string | null): The profile picture URL.
- `username` (string | null): The profile name.
- `phone` (string): The phone number provided.

#### Example:
```javascript
const profile = await SocialScrapper.whatsapp("5511000000000");
console.log(profile);
```

---

## Error Handling

If an error occurs during scraping, it will be thrown as an exception. Use `try/catch` to handle errors gracefully.

Example:
```javascript
try {
  const data = await SocialScrapper.whatsapp("5511000000000");
  console.log(data);
} catch (error) {
  console.error("Error:", error.message);
}
```

---

## Requirements

- Node.js 18 or later
- Internet connection to access public profiles

---

## Roadmap

- Add support for scraping Facebook profiles.
- Add support for Instagram profiles.
- Implement robust error handling and proxy support.

---

## Contributing

Contributions are welcome! If you'd like to add new features or fix bugs, feel free to submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Issues

If you encounter any issues, feel free to open an issue on the [GitHub repository](https://github.com/lunosat/social-profile-scraping/issues).

---

With this README, your project will have a professional and user-friendly introduction for others to understand and use it effectively. 🚀