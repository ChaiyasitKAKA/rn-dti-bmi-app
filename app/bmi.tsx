import React, { useState } from 'react'
import { Image, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

export default function Bmi() {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [result, setResult] = useState(0.00)
    const [resultText, setResultText] = useState('')

    const handleCalPress = () => {
        Keyboard.dismiss();

        if (weight.length == 0 || height.length == 0) {
            setResultText('กรุณาป้อนข้อมูลให้ครบถ้วน');
            return;
        } else {
            const w = parseFloat(weight)
            const h = parseFloat(height) / 100
            if (w && h) {
                const bmi = w / (h * h)
                setResult(bmi)
                if (bmi < 18.5) {
                    setResultText('ต่ำกว่าเกณฑ์')
                } else if (bmi < 25) {
                    setResultText('ปกติ')
                } else if (bmi < 30) {
                    setResultText('อ้วน')
                } else {
                    setResultText('อ้วนเกินเกณฑ์')
                }
            }
        }
    };


    const resetPress = () => {
        Keyboard.dismiss();
        setWeight('')
        setHeight('')
        setResult(0.00)
        setResultText('')
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Image
                    source={require("@/assets/images/bmi.png")}
                    style={styles.imglogo}
                />
                <View style={styles.cardInput}>
                    <Text style={styles.labelinput}>
                        ป้อนน้ำหนัก (Kg)
                    </Text>
                    <TextInput
                        placeholder='เช่น 65'
                        keyboardType='numeric'
                        value={weight}
                        onChangeText={setWeight}
                        style={styles.textinput}
                    />
                    <View style={{ height: 20 }} />
                    <Text style={styles.labelinput}>
                        ป้อนส่วนสูง (Cm)
                    </Text>
                    <TextInput
                        placeholder='เช่น 170'
                        keyboardType='numeric'
                        value={height}
                        onChangeText={setHeight}
                        style={styles.textinput}
                    />
                    <View style={styles.siprowbtn}>
                        <TouchableOpacity style={styles.btncalculate} onPress={handleCalPress}>
                            <Text style={styles.textbtn}>
                                คำนวณ BMI
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btsreset} onPress={resetPress}>
                            <Text style={styles.textbtn}>
                                รีเซ็ตค่า
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* resault card */}
                <View style={styles.cardResult}>
                    <Text style={styles.resultText}>BMI</Text>
                    <Text style={[styles.resultText, { fontSize: 30, color: 'red' }]}>{result}</Text>
                    <Text style={styles.resultText}>{resultText}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    resultText: {
        fontSize: 20,
        marginTop: 10,
        color: 'white',
        fontFamily: 'Kanit_700Bold',
    },
    cardResult: {
        //borderWidth: 1,
        width: '80%',
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: '#738b64',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
    },

    siprowbtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginTop: 20,
    },

    textbtn: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Kanit_700Bold'
    },

    btncalculate: {
        flex: 2,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#64844e',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,

    },

    btsreset: {
        flex: 2,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#be1919',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,
    },

    textinput: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: 'Kanit_400Regular',
    },

    labelinput: {
        fontSize: 18,
        color: '#3c3a3a',
        fontFamily: 'Kanit_400Regular',
    },

    cardInput: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.25,

    },

    imglogo: {
        width: 120,
        height: 120,
        marginTop: 20,
        marginBottom: 20,
    },

    container: {
        flex: 1,
        alignItems: 'center',//center align items horizontally
    }
})