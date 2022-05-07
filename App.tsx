import { ThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

import useCachedResources from "./src/shared/hooks/useCachedResources";
import Navigation from "./src/shared/navigation";
import theme from "./src/shared/themes/theme";

const queryClient = new QueryClient();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ backgroundColor: "black" }}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Navigation colorScheme={"dark"} />
            </GestureHandlerRootView>
            <StatusBar backgroundColor="transparent" style="light" />
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    );
  }
}
