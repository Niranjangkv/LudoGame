# 🎲 LudoGame — React Native Mobile App

**LudoGame** is a cross-platform mobile board game built with **React Native** (`@react-native-community/cli`) for both **Android** and **iOS**. Experience the classic multiplayer Ludo board game with smooth mobile controls, interactive dice rolls, and local game state management.

---

##  Features

* **Classic Ludo Gameplay:** Traditional four-color board layout (Red, Green, Yellow, Blue) with home bases, safe zones, and finish tracks.
* **Interactive Dice & Turn Logic:** Animated/interactive dice rolls with automatic turn switching and extra turns on rolling a 6.
* **Token Movement & Capturing:** Valid move highlighting, safe-tile protection, and opponent token capture mechanics.
* **Cross-Platform Support:** Runs natively on both **Android** and **iOS** devices/emulators.
* **Modular Architecture:** Cleanly separated UI components (`components/`) and structured board/game configuration (`db.json`).

---

##  Tech Stack

* **Framework:** React Native (`@react-native-community/cli`)
* **Language:** JavaScript (`App.jsx`, `index.js`)
* **Bundler:** Metro
* **Testing:** Jest (`__tests__/`)
* **Code Quality:** ESLint & Prettier

---

##  Project Structure

```text
LudoGame/
├── __tests__/              # Jest unit and component tests
├── android/                # Native Android project files
├── ios/                    # Native iOS project files & CocoaPods
├── components/             # Reusable UI components (Board, Dice, Tokens, etc.)
├── App.jsx                 # Main application entry component
├── db.json                 # Board coordinates, paths, and game data
├── index.js                # React Native root registry
├── metro.config.js         # Metro bundler configuration
└── package.json            # Dependencies and run scripts
```

---

##  Getting Started

Before running the project, make sure you have completed the official [React Native Environment Setup](https://reactnative.dev) for Android Studio and/or Xcode.

### 1. Clone the Repository
```bash
git clone https://github.com
cd LudoGame
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# OR using Yarn
yarn install
```

*(For iOS only)* Install CocoaPods dependencies:
```bash
cd ios
bundle install
bundle exec pod install
cd ..
```

### 3. Start the Metro Bundler
Run Metro from the root of your project:
```bash
npm start
# OR
yarn start
```

### 4. Run on Android or iOS
Open a **new terminal** in the project root while Metro is running:

**For Android:**
```bash
npm run android
# OR
yarn android
```

**For iOS:**
```bash
npm run ios
# OR
yarn ios
```

---

## 🧪 Running Tests

To run the Jest test suite:
```bash
npm test
# OR
yarn test
```

---

##  Contributing

Contributions, bug reports, and feature suggestions are welcome! Feel free to check the [issues page](https://github.com).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m 'Add NewFeature'`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

##  License

This project is open-source and available under the [MIT License](LICENSE).

---

##  Author

**Niranjan**
* GitHub: [@Niranjangkv](https://github.com/Niranjangkv)
