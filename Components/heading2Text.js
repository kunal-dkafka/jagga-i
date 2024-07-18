import { Text, StyleSheet } from 'react-native';

const Heading2Text = ({ text }) => {
    return(
    <Text style={{fontSize: 21,
                        color: '#4B4848',
                        fontWeight: 'bold',
                        marginLeft: 35,}}> {text} </Text>
    );
};

const styles = StyleSheet.create({
    text: {

    }
});

export default Heading2Text;