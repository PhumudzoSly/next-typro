# next-typro

`next-typro` is a TypeScript library providing custom types and validators for common data formats, such as email addresses, URLs, and more. It helps ensure data conforms to specific formats and enhances code readability and type safety.

## Features

- Custom TypeScript types for email, URL, UUID, and more
- Validators for runtime format checking
- Easy to integrate into any TypeScript project

## Installation

To install the library, use npm or yarn:

```sh
npm install next-typro
```

or

```sh
yarn add next-typro
```

## Usage

### Importing Types and Validators

You can import both types and validators from the package:

```typescript
import { Email, URL, UUID, HexColor } from "next-typro";
import { isEmail, isURL, isUUID, isHexColor } from "next-typro";
```

### Examples

#### Email

```typescript
const email: Email = "example@example.com";

if (isEmail(email)) {
  console.log("Valid email:", email);
} else {
  console.log("Invalid email:", email);
}
```

#### URL

```typescript
const url: URL = "https://example.com";

if (isURL(url)) {
  console.log("Valid URL:", url);
} else {
  console.log("Invalid URL:", url);
}
```

#### UUID

```typescript
const uuid: UUID = "123e4567-e89b-12d3-a456-426614174000";

if (isUUID(uuid)) {
  console.log("Valid UUID:", uuid);
} else {
  console.log("Invalid UUID:", uuid);
}
```

#### Hex Color

```typescript
const hexColor: HexColor = "#ff5733";

if (isHexColor(hexColor)) {
  console.log("Valid Hex Color:", hexColor);
} else {
  console.log("Invalid Hex Color:", hexColor);
}
```

## Example Supported Types

- `Email`: Validates email addresses.
- `URL`: Validates URLs.
- `UUID`: Validates UUIDs.
- `HexColor`: Validates hexadecimal color codes.
- `CreditCard`: Validates credit card numbers.
- `PostalCode`: Validates postal codes.
- `Latitude` and `Longitude`: Validates geographical coordinates.
- `Markdown`: Basic validation for Markdown content.
- `DateTime` and `RFC3339DateTime`: Validates date-time formats.
- `Base64`: Validates Base64 encoded strings.
- `TwitterHandle`: Validates Twitter handles.
- `FileExtension`: Validates file extensions.
- `ISO8601Duration`: Validates ISO 8601 duration format.
- `Slug`: Validates URL slugs.
- `HTML`: Basic validation for HTML content.
- `GeoJSON`: Basic validation for GeoJSON format.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub. Follow the guidelines in `CONTRIBUTING.md` for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various TypeScript libraries and custom type validation practices.
- Thanks to the open-source community for their contributions and support.

## Contact

For any questions or feedback, please contact [PhumudzoSly](mailto:phumumahandana@gmail.com).
