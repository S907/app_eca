import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'

const WEEK_DAYS= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const _color="#ececec";
const _borderRadius=16;
const _spacing=16;

const Day = ({ day, color }) => {
  const [isOn, setIsOn] = React.useState(false)
  return (
    <View style={{}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontFamily:'OP-Sans', fontSize:17}}>{day}</Text>
        <Switch
          value={isOn}
          onValueChange={value => setIsOn(value)}
          trackColor={{true:'#666'}}
          style={{
            transformOrigin:['100%','50%',0],
            transform:[
              {scale:1.1}
            ]
            
          }}
        />
      </View>
    </View>
  )
}
export default function Scheduler() {
  return (
    <View style={{
      padding:_spacing,
      gap:_spacing
    }}>
      <Text style={{fontFamily:'BT-Regular',fontSize:17,}}>Scheduler</Text>
      {
        WEEK_DAYS.map(day=>{
          return <Day 
          day={day}
          key={`day-${day}`}
          color={_color}  
          />
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({})