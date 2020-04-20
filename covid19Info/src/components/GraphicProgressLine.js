import React from 'react';
import { View, Text, Alert} from 'react-native';
import {
    LineChart,
    //BarChart,
    //PieChart,
    //ProgressChart,
    //ContributionGraph,
    //StackedBarChart
} from "react-native-chart-kit";

export default props => {
    const chartConfigSet={
        backgroundColor: "#FFE4C4",
        backgroundGradientFrom: "#696969",
        backgroundGradientTo: "#F5F5F5",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: "6", //Raio da circunferência do ponto xy - Somente no LineChart
            strokeWidth: "1", //Largura da borda do ponto xy
            stroke: "#4682B4" //Cor da borda do ponto xy
        }
    }

    const onShowValue = (value, dataset, getColor) => console.log(value, dataset, getColor)

    return (
        <View style={{alignItems:'center'}}>
            <Text style={{color: '#FFF'}}>{props.title}</Text>
            <LineChart
                data={props.dataSet}
                width={props.widthLayout - 20} //Retira 20 do width total para que haja espacos laterais/Conciliado ao CENTER 
                height={200}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={chartConfigSet}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}
