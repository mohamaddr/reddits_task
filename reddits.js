
var mydata=[];
        fetch('https://www.reddit.com/r/all.json?limit=100')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out); 
        mydata.push(out);
        var Allpermalink =['All Subreddits: '];
        var Allsub =['The total number of subreddit_subscribers: '];
        var Prefixed=[];
        var average=[];
        var total=0;
        var numbers=0;
        var lessThan=0;
       
        for (var i = 0; i < mydata[0].data.children.length; i++) {
            Allpermalink.push(' '+mydata[0].data.children[i].data.subreddit);
            Prefixed.push(mydata[0].data.children[i].data.subreddit_name_prefixed);
            if(mydata[0].data.children[i].data.num_crossposts<5){
            average.push(mydata[0].data.children[i].data.num_crossposts)
            }
          total+=mydata[0].data.children[i].data.subreddit_subscribers;

            document.getElementById("myData").innerHTML = Allpermalink;

            document.getElementById("subscriber").innerHTML = total;
          
        } 
   

        for(var d = 0; d < average.length; d++){
          numbers+=average[d];

        }
       var results= numbers/average.length;
       document.getElementById("averages").innerHTML = results;


   
const letterFrequencies = Prefixed
  .reduce((freqs, name) => Object
    .assign(freqs, { [name]: (freqs[name] || 0 ) + 1 }), {});

    const letterFrequencyArr = Object
    .keys(letterFrequencies)
    .map(name => ({ name, frequency: letterFrequencies[name] }));
    letterFrequencyArr.sort((a, b) => b.frequency - a.frequency || a.name.localeCompare(b.name));
var prex=[];
    for (var j = 0; j < letterFrequencyArr.length; j++) {
    prex.push( ' Prefixed :  ' + letterFrequencyArr[j].name + ',   Occurrences :  '+ letterFrequencyArr[j].frequency); 
  document.getElementById("myPrefixed").innerHTML = prex;
    }
    
})
.catch(err => console.error(err));
       
