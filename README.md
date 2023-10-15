# react-nepali-date-picker-lite

## Introduction

React Nepali Date Picker is a widget for react , this is a typical calendar picker ,
it is very light with and can be intigrated with ayour own styling component

## Installation

```javascript
npm i react-nepali-date-picker-lite
```

## Parameters

Calendar can be used to act as an input component as well. All the parameters are optional. And also can pass custom inpt component as children

1. value : send the date from which to show calendar with else default is the current date. Date must be in 'YYY-MM-DD' format currently only one format is supported.
2. onSelect : returns the value that has been selected or the date that user has clicked on
3. inputprops: props for input element for using define input element.
4. className: class for root container.

## Demo

[clickhere](https://demo.rohan.info.np/ReactNpDatePicker/)

commands to run demo app

```javascript
  npm
  cd app
  npm run dev
```

## Styling

Add this to your application css to change datepicker styling, use this to change width, font color and background color of the datepicker in your app.

1. .picker-container: the main container of the datepicker that wraps everything, add background color to the datepicker

2. .daybutton: this is the container for actual date of a day in the datepicker such as 1,2,3, 4, ....

3. .dayselected: css for the date that was actually selected

4. .daynormal: css too give hovver effect on normal days

5. .today: css to style today date

6. .picker-header-container: it is the container of datepicker header where header or located. ef:- prevbtn, nextbtn, yearselect....

7. .prev-btn: css for previous button.

8. .next-btn: css for next button.

9. .month-select: css for select element of month.

10. .year-select: css for select element of year.

11. .datepicker-select: css for select element.

## Usage

```javascript
import React, { useState } from "react";
import {
  NepaliDatePicker,
  NepaliDateConverter,
} from "react-nepali-date-picker-lite";

function App() {
  const today = NepaliDateConverter.getNepaliDate();
  const [value, setValue] = useState(today);
  return <NepaliDatePicker value={value} onSelect={setValue} />;
}
```

## Author

- [Rohan Adhikari](https://rohanadhikari.com.np/)
