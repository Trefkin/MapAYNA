# Xəritə AYNA

AYNA Map mobil tətbiqi üçün React Native WebView əsasında hazırlanmış layihə.

## Xüsusiyyətlər

- React Native WebView istifadə edərək https://map.ayna.gov.az/ saytının mobil tətbiq versiyası
- iOS Safari user agent konfiqurasiyası
- Tam ekran dəstəyi
- Xüsusi logo

## Quraşdırma

1. Layihəni klonlayın:
```bash
git clone https://github.com/Trefkin/MapAYNA.git
```

2. Asılılıqları quraşdırın:
```bash
cd MapAYNA
npm install
```

3. Android üçün:
```bash
npx react-native run-android
```

## Release

Release APK və AAB faylları:
- APK: `android/app/build/outputs/apk/release/app-release.apk`
- AAB: `android/app/build/outputs/bundle/release/app-release.aab`
