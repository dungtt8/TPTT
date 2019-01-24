import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import Global from "../../Util/Global";

export default class AccountManager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _goBack() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <TouchableOpacity
              style={styles.leftHeader}
              onPress={() => this._goBack()}
            >
              <Icon name="long-arrow-left" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.midHeader}>
            <Text />
          </View>
          <View style={styles.rightHeader}>
            <Text style={{ fontSize: 16, color: "#fff", margin: 5 }} />
            
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MyDetailPr5_")}
        >
          <View style={styles.containerMyProfile}>
            <View style={styles.containerAvatar}>
              <Avatar
                medium
                rounded
                source={{ uri: Global.currentUser.userAvatar }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>

            <View style={styles.containerDescription}>
              <Text style={styles.userName}>{Global.currentUser.userName}</Text>

              <Icon
                name="chevron-right"
                color="grey"
                type="font-awesome"
                size={18}
              />
            </View>
          </View>
        </TouchableOpacity>

        <View style={styles.body}>
          <TouchableOpacity onPress={() => console.log("go...")}>
            <View style={styles.menu}>
              <View>
                <Icon
                  name="edit"
                  color='grey'
                  type='AntDesign'
                  size={20}
                />
              </View>
              <View style={styles.containerDescription}>
                <Text>Edit profile</Text>

                <Icon
                  name="chevron-right"
                  color="grey"
                  type="font-awesome"
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* My Love */}
          <TouchableOpacity onPress={() => console.log("go...")}>
            <View style={styles.menu}>
              <View>
                <Icon
                  name ='history'
                  type = 'FontAwesome'
                  color = 'grey'
                  size = {20}
                />
              </View>
              <View style={styles.containerDescription}>
                <Text>History Game</Text>

                <Icon
                  name="chevron-right"
                  color="grey"
                  type="font-awesome"
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log("go...")}>
            <View style={styles.menu}>
              <Icon
                name = 'group'
                color = 'grey'
                size = {20}
              />
              <View style={styles.containerDescription}>
                <Text>Friends</Text>

                <Icon
                  name="chevron-right"
                  color="grey"
                  type="font-awesome"
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>

          {/* Setting */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("OtherUser_")}
          >
            <View style={styles.menu}>
              <View>
                <Icon
                  name = 'cogs'
                  color = 'grey'
                  size = {20}
                />
              </View>
              <View style={styles.containerDescription}>
                <Text>Setting</Text>

                <Icon
                  name="chevron-right"
                  color="grey"
                  type="font-awesome"
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("OtherUser_")}
          >
            <View style={styles.menu}>
              <View>
                <Icon
                  name = 'sign-out'
                  color = 'grey'
                  size = {20}
                />
              </View>
              <View style={styles.containerDescription}>
                <Text>Sign-out</Text>

                <Icon
                  name="chevron-right"
                  color="grey"
                  type="font-awesome"
                  size={18}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffb3b3"
  },
  header: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffb3b3"
  },
  leftHeader: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 10
  },
  midHeader: {
    flex: 2,

    justifyContent: "center",
    alignItems: "center"
  },
  rightHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  iconStyle: {
    margin: 5
  },
  containerMyProfile: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 5
  },
  containerAvatar: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  containerDescription: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10
  },
  userName: {
    fontSize: 16,
    margin: 10
  },
  body: {},
  menu: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 2
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: "contain"
  }
});
