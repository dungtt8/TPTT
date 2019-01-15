import {
    PermissionsAndroid
} from 'react-native'
export async function CheckPermission(){
    try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            'title': 'READ_CONTACTS Permission',
            'message': 'READ_CONTACTS needs access to your READ_CONTACTS ' +
                       'so you can take awesome READ_CONTACTS.'
          }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the READ_CONTACTS")
        } else {
          console.log("READ_CONTACTS permission denied")
        }
        
      } catch (err) {
        console.warn(err)
      }
}