import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    headerView: {
        alignItems:  Platform.OS === 'ios' ? 'center' : 'flex-start',
        marginVertical: 20
    },
    headerText: {
        fontSize: 20,
        color: "black",
        fontWeight: 'bold',
    },
    phpneInputView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10

    },
    textInput: {
        paddingVertical: 12,
        borderWidth: 2,
        paddingHorizontal: 10,
        borderColor: '#D7DBDD',
        borderRadius: 5,
      },
    phoneInputIcon: {
        position: 'absolute',
        right: 10
    },
    enterSection: {
        borderBottomColor: '#D7DBDD',
        borderBottomWidth: 1,
    },
    enter: {
        marginVertical: 15,
        height: 60,
        backgroundColor: '#58ceb2',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    enterText: {
        fontWeight: 'bold'
    },
    forgotPass: {
        alignItems: 'center',
        marginBottom: 35
    },
    forgotPassText: {
        color: '#58ceb2'
    },
    noLoginSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    noLoginText: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    },
    registerView: {
        paddingVertical: 5
    },
    register: {
        color: '#58ceb2',
        fontWeight: 'bold',
        fontSize: 14
    }
});