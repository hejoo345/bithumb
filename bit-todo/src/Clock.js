import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state ={
     date : new Date(), //new Date();세미콜론 문법에러 발생
    }

    getDate = () =>{
        this.setState({
            date:new Date()
        });
    };

    componentDidMount() {
      this.oneMinuteCall = setInterval(() => this.getDate(), 1000); 
    }
    
    componentWillUnmount() {
      clearInterval(this.oneMinuteCall);
    }

    render() {
        const {date} = this.state ;

        return (
        <Container>
            <CurDate>
            {date.getFullYear()}년/
            {date.getMonth() + 1 }월/
            {date.getDate()}일
            </CurDate>

            <CurDay>
                {date.getDay() === 0
                ? "Sunday"
                : date.getDay() === 1
                ? "Monday"
                : date.getDay() === 2
                ? "Tuesday"
                : date.getDay() === 3
                ? "wednesday"
                : date.getDay() === 4
                ? "Thursday"
                : date.getDay() === 5
                ? "Friday"
                : "Saturday"}요일
            </CurDay>
            <CurTime>
                {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}시:
                {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}분
            </CurTime>
        </Container>
        );
    }
}

const Container = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
 font-size: 24px;
`;

const CurDay = styled.div`
 font-size: 25px;
 font-style: italic;
`;

const CurTime = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export default Clock;
