import React ,{Component} from 'react';
import ApplyFilter from '../ApplyFilter';
import QustionPalette from '../QuestionPalette';

class QuestionPaper extends Component {
    constructor(props){
      super(props);
      this.state={
          content:[
                          { id : 'q1',  
                            question:'question1',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                            { id : 'q2',  
                            question:'question2',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                            { id : 'q3',  
                            question:'question3',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                            { id : 'q4',  
                            question:'question4',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                            { id : 'q5',  
                            question:'question5',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                            { id : 'q6',  
                            question:'question6',
                            options:['opt1','opt2','opt3','opt4'],
                            correct:'opt2',
                            response:0,
                            review:false },
                          ],	
                      marked:'all',
                      currentIndex:0
                  
                              
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
      onNext = (nextIndex , length) => {
          if (nextIndex < length)
          this.setState({
              currentIndex:nextIndex
          })
          else console.log("end")
      }
      onPrevious = (prevIndex) => {
        if (prevIndex >= 0)
          this.setState({
              currentIndex:prevIndex
          })
          else console.log("Pr")
    }
  
    
  
    getFilter = (markedFilter) => {
      
      this.setState({
          marked:markedFilter,
          currentIndex:0
      })
    }
      
      render(){
          
          const { content,marked} = this.state;
          let updatedContent=[];
  
          switch(marked){
              case "mark":
                  updatedContent=content.filter( element => (element.response !==0 && !element.review ))
                  break;
              case "unmark":
                  updatedContent=content.filter( element => (element.response === 0 && !element.review ))
                  break;
              case "review":
                  updatedContent=content.filter( element => ( element.review ))
                  break;
              case "all":
                  updatedContent=content
                  break;
  
          }
          console.log(this.state.content)
          console.log(updatedContent)
          return(
          <div>
              <div>
                  {console.log(updatedContent.length)}
                  {console.log(this.state.currentIndex)}
                  {
                      updatedContent.length>0 ? 
                        
                      <QustionPalette 
                            index={this.state.currentIndex}
                            id={updatedContent[this.state.currentIndex].id}
                            questionContent={updatedContent[this.state.currentIndex]}
                            getResponse={this.getResponse}
                            getReviewStatus={this.getReviewStatus}
                            onReset={this.onReset}
                            onNext={this.onNext}
                            onPrevious={this.onPrevious}
                            numberOfQuestion={updatedContent.length}
                      />
                      :`No questions ${marked}`}
                  
              </div>
              <div>
                  {updatedContent.map((element)=>
                      <p>{element.id}</p>
                      )}
              
              </div>
              <div>
                  <ApplyFilter 
                      filterType={this.state.marked} 
                      getFilter={this.getFilter}
                      />
              </div>
  
          </div>
          );
      }
  }
  export default QuestionPaper;