import { firebaseApp } from "../Util/firebase";


export function CreateRoomFB(roomInfo, RootUser){
    return firebaseApp.database().ref('Room/').push({
        roomID: roomInfo.roomID,
        roomName:roomInfo.roomName,
        startTime: roomInfo.timeStart,
        rootUser: RootUser,
        users:[RootUser],
        messages:[[{
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },],]
    }).then((data) => {
        var res = {
            roomID: roomInfo.roomID,
            roomName:roomInfo.roomName,
            startTime: roomInfo.timeStart,
            rootUser: RootUser,
            users:[RootUser],
        }
        return res
    }).catch((error) => {

    })
}

export function GetListRoom(callback){
    
    firebaseApp.database().ref('Room/').once('value', function (snapshot) {
        
        callback(snapshot.val())
    });
    
}

export function UpdateListRoom(list){
    firebaseApp.database().ref('Room/').update(list)
}




export function readState(callback) {
    firebaseApp.database().ref('Room/').on('value', function (snapshot) {
        console.log(">>>>>>>>>>>>")
        // console.log(snapshot.val())
        result = snapshot.val()
        callback(result)
    });
}