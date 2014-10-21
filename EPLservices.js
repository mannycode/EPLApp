/**
 * Created by tricom on 10/20/14.
 */
angular.module("EPLapp.EPLServices",[])
    .service('sharedProperties',function(){

        var clublist2=[
            {
                club:{
                    id:1,
                    name:'Manchester City',
                    points:86,
                    manager:'Manuel Pellegrini',
                    stadium:'Etihad Stadium',
                    captain: 'Vincent Kompany'

                }


            },
            {
                club:{
                    id:2,
                    name:'Liverpool',
                    points:84,
                    manager:'Brendan Rodgers',
                    stadium:'Anfield',
                    captain:'Steven Gerrard'
                }


            },
            {
                club:{
                    id:3,
                    name:'Chelsea',
                    points:82,
                    manager:'José Mourinho',
                    stadium:'Stamford Bridge',
                    captain:'John Terry'
                }


            },
            {
                club:{
                    id:4,
                    name:'Arsenal',
                    points:79,
                    manager:'Arsène Wenger',
                    stadium:'Emirates Stadium',
                    captain:'Thomas Vermaelen'
                }


            },
            {
                club:{
                    id:5,
                    name:'Everton',
                    points:72,
                    manager:'Roberto Martínez',
                    stadium:'Goodison Park',
                    captain:'Phil Jagielka'
                }


            },
            {
                club:{
                    id:6,
                    name:'Tottenham Hotspur',
                    points:69,
                    manager:'Tim Sherwood',
                    stadium:'White Hart Lane',
                    captain:'Michael Dawson'
                }


            },
            {
                club:{
                    id:7,
                    name:'Manchester United',
                    points:64,
                    manager:'David Moyes',
                    stadium:'Old Trafford',
                    captain:'Nemanja Vidić'
                }


            },
            {
                club:{
                    id:8,
                    name:'Southampton',
                    points:56,
                    manager:'Mauricio Pochettino',
                    stadium:'St Mary\'s Stadium',
                    captain:'Adam Lallana'
                }


            },
            {
                club:{
                    id:9,
                    name:'Stoke',
                    points:50,
                    manager:'',
                    stadium:'Britannia Stadium',
                    captain:''
                }


            },
            {
                club:{
                    id:10,
                    name:'Newcastle',
                    points:49,
                    manager:'Mark Hughes',
                    stadium:'St James Park',
                    captain:'Ryan Shawcross'
                }


            },
            {
                club:{
                    id:11,
                    name:'Crystal Palace',
                    points:45,
                    manager:'Tony Pulis',
                    stadium:'Selhurst Park',
                    captain:'Paddy McCarthy'
                }


            },
            {
                club:{
                    id:12,
                    name:'Swansea',
                    points:42,
                    manager:'Garry Monk',
                    stadium:'Liberty Stadium',
                    captain:'Ashley Williams'
                }


            },
            {
                club:{
                    id:13,
                    name:'Westham',
                    points:40,
                    manager:'Sam Allardyce',
                    stadium:'Boleyn Ground',
                    captain:'Kevin Nolan'
                }


            },
            {
                club:{
                    id:14,
                    name:'Sunderland',
                    points:38,
                    manager:'',
                    stadium:'Stadium of Light',
                    captain:''
                }


            },
            {
                club:{
                    id:15,
                    name:'Aston Villa',
                    points:38,
                    manager:'Gus Poyet',
                    stadium:'Villa Park',
                    captain:'John O\'Shea'
                }


            }
            ,

            {
                club:{
                    id:16,
                    name:'Hull',
                    points:37,
                    manager:'Steve Bruce',
                    stadium:'K C Stadium',
                    captain:'Robert Koren'
                }


            },
            {
                club:{
                    id:17,
                    name:'Westbrom',
                    points:36,
                    manager:'Pepe Mel',
                    stadium:'The Hawthorns',
                    captain:'Chris Brunt'
                }


            },
            {
                club:{
                    id:18,
                    name:'Norwich',
                    points:33,
                    manager:'Neil Adams',
                    stadium:'Carrow Road',
                    captain:'Russell Martin'
                }


            },

            {
                club:{
                    id:19,
                    name:'Fulham',
                    points:32,
                    manager:'Felix Magath',
                    stadium:'Craven Cottage',
                    captain:'Brede Hangeland'
                }


            },
            {
                club:{
                    id:20,
                    name:'Cardiff',
                    points:30,
                    manager:'Ole Gunnar Solskjaer',
                    stadium:'Cardiff City Stadium',
                    captain:'Mark Hudson'
                }


            }




        ];

        return{

            getProperty:function(){

                return clublist2;

            }
        }

    });


