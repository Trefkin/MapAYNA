import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Platform, View } from 'react-native';
import WebView from 'react-native-webview/lib/WebView';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                backgroundColor="#ffffff"
                barStyle="dark-content"
                translucent={true}
            />
            <SafeAreaView style={styles.safeArea}>
                <WebView
                    source={{ 
                        uri: 'https://map.ayna.gov.az/',
                        headers: {
                            'Cache-Control': 'no-cache',
                            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                            'Accept-Encoding': 'gzip, deflate, br',
                            'Connection': 'keep-alive',
                            'DNT': '1',
                            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1'
                        }
                    }}
                    style={styles.webview}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    mixedContentMode="compatibility"
                    onError={(syntheticEvent) => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView error:', nativeEvent);
                    }}
                    onHttpError={(syntheticEvent) => {
                        const { nativeEvent } = syntheticEvent;
                        console.warn('WebView HTTP error:', nativeEvent);
                    }}
                    incognito={true}
                    thirdPartyCookiesEnabled={true}
                    cacheEnabled={false}
                    cacheMode="LOAD_NO_CACHE"
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    webview: {
        flex: 1,
    },
});

export default App;
