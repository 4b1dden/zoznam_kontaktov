// is used to get rid of flow complaining about not being able to find react-native

declare module 'react-native' {
    declare module.exports: any
}