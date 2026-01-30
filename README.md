# Mechanic

A React Native mobile application for managing mechanics with location-based features.

## Features

- **Authentication**: User registration and login
- **Dashboard**: Main home screen with navigation
- **Add Mechanic**: Location-based mechanic addition using Mapbox maps
- **Profile Management**: Edit user name and change password
- **Location Services**: GPS integration for mechanic location tracking
- **State Management**: Redux for application state
- **Form Validation**: Formik and Yup for form handling

## Tech Stack

- **React Native** (v0.71.7)
- **React Navigation** (Stack & Bottom Tabs)
- **Redux** & **React Redux** for state management
- **Native Base** for UI components
- **Mapbox** (@rnmapbox/maps) for maps
- **Axios** for API calls
- **Formik** & **Yup** for form validation
- **AsyncStorage** for local data persistence
- **Jest** & **React Native Testing Library** for testing

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment set up
  - For iOS: Xcode and CocoaPods
  - For Android: Android Studio and Android SDK
- Mapbox account and access token

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mechanic
```

2. Install dependencies:
```bash
npm install
```

3. For iOS, install CocoaPods dependencies:
```bash
cd ios
pod install
cd ..
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
API_URL=your_api_url_here
MAP_BOX_TOKEN=your_mapbox_token_here
APP_DOMAIN=your_app_domain_here
```

Make sure to configure `react-native-dotenv` in your Babel config if not already set up.

## Running the App

### Start Metro Bundler
```bash
npm start
```

### Run on iOS
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

## Project Structure

```
mechanic/
├── components/          # Main application components
│   ├── AddMechanic/    # Add mechanic feature with map
│   ├── Dashboard.js     # Main dashboard component
│   ├── Login.js        # Login screen
│   ├── Register.js     # Registration screen
│   ├── Profile.js      # User profile screen
│   └── ...
├── UI_Components/      # Reusable UI components
│   ├── LoginForm.js
│   ├── RegisterForm.js
│   ├── HeaderContainer.js
│   └── ...
├── store/              # Redux store configuration
│   ├── actions/        # Redux actions
│   ├── reducers/       # Redux reducers
│   └── constants/      # Action constants
├── helpers/            # Utility functions
│   └── httpInterceptor.js  # Axios interceptor for auth
├── __tests__/          # Test files
├── android/            # Android native code
├── ios/                # iOS native code
└── App.js              # Main application entry point
```

## Testing

Run tests with:
```bash
npm test
```

## Available Scripts

- `npm start` - Start Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run test suite
- `npm run lint` - Run ESLint

## Key Features Implementation

### Authentication
- JWT token-based authentication
- Token stored in AsyncStorage
- Automatic logout on 401 errors via HTTP interceptor

### Map Integration
- Mapbox GL for interactive maps
- Location permissions handling
- GPS coordinate tracking
- Custom markers for mechanic locations

### Navigation
- Stack navigation for authentication flow
- Bottom tab navigation for main app screens
- Header navigation container for profile/logout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary.
