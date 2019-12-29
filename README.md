# Coolicons Icons for React Native

### react-native-ico-coolicons

369 Vector Icons for React Native

<img src="./static/airplane-black-shape.png" alt="airplane-black-shape" width="150" height="150"> <img src="./static/alphabetical-order-from-a-to-z.png" alt="alphabetical-order-from-a-to-z" width="150" height="150"> <img src="./static/ambulance.png" alt="ambulance" width="150" height="150">

## List of icons

- [List of Coolicons Icons](http://ico.simpleness.org/pack/coolicons)

## Usage

```
import Icon from 'react-native-ico-coolicons';


// Inside some view component
render() {
    return (
        <>
          <Icon name="airplane-black-shape" />
          <Icon name="alphabetical-order-from-a-to-z" height="40" width="40" />
          <Icon name="ambulance" color="red" />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-coolicons react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-coolicons react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "airplane-black-shape"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
