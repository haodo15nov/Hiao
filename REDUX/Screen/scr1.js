// YourComponent.js
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchUsers } from '../Action/actions';

const YourComponent = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text>Name: {item.name}</Text>
              <Text>Email: {item.email}</Text>
              {/* Display other user information */}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { fetchUsers })(YourComponent);
