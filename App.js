import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "./src/context/BlogContext";
import { Context } from "./src/context/BlogContext";

function IndexScreen() {
  const { state, addBlogPost } = useContext(Context);
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Blog Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blog" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

// export default App;
