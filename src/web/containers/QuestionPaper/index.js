import React, {Component} from 'react';
import  QuestionContent  from '../QuestionContent';
import  ApplyFilter  from '../ApplyFilter';



class QuestionPaper extends Component {
    constructor(props){
      super(props);
      this.state={
          paperDetails:[
                          {id : 'q1', question:'question1',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          
                          {id : 'q2', question:'question2',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          
                          {id : 'q3', question:'question3',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          
                          {id : 'q4', question:'question4',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          
                          {id : 'q5', question:'question5',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          
                          {id : 'q6', question:'question6',
                          options:[{option:'opt1',marked:false},
                                    {option:'opt2',marked:false},
                                    {option:'opt3',marked:false},
                                    {option:'opt4',marked:false}],
                            correct:'opt2',
                            response:false,
                            review:false},
                          ],	
                      marked:'all',
                  
                              
      };
    }
      getResponse = (Id,response) => {
          let index=this.state.content.findIndex(element => element.id === Id);
          let arr=this.state.content;
          arr[index].response=response;
          this.setState({
              content:arr
          })
      }//spread operator??
      getReviewStatus = (Id,review) => {
          let index=this.state.content.findIndex(element => element.id === Id);
          let arr=this.state.content;
          arr[index].review=review;
          this.setState({
              content:arr
          })
      }
      onReset = (Id) => {
          let index=this.state.content.findIndex(element => element.id === Id);
          let arr=this.state.content;
          arr[index].review=false;
          arr[index].response=0;
          this.setState({
              content:arr
          })
      }
  
    
  
    getFilter = (markedFilter) => {
      
      this.setState({
          marked:markedFilter
      })
    }
      
      render(){
          
          const { paperDetails, marked }  = this.state;
          let updatedContent=[];
  
          switch(marked){
              case "mark":
                  updatedContent=paperDetails.filter( element => (element.response !==0 && !element.review ))
                  break;
              case "unmark":
                  updatedContent=paperDetails.filter( element => (element.response === 0 && !element.review ))
                  break;
              case "review":
                  updatedContent=paperDetails.filter( element => ( element.review ))
                  break;
              case "all":
                  updatedContent=paperDetails
                  break;
  
          }
         
          return(
          <div>
              <div>
                  {/* {updatedContent.map((element)=>
                      <QuestionPalette 
                          id={element.id}
                          questionContent={element}
                          getResponse={this.getResponse}
                          getReviewStatus={this.getReviewStatus}
                          onReset={this.onReset}
                      />)} */}
                      <QuestionContent questions={paperDetails}/>

                  
              </div>
              {/* <div>
                  {updatedContent.map((element)=>
                      <p>{element.id}</p>
                      )}
              
              </div>
              <div>
                  <ApplyFilter 
                      filterType={this.state.marked} 
                      getFilter={this.getFilter}
                      />
              </div> */}
  
          </div>
          );
      }
  }
  export default QuestionPaper;