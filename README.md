# Typescript

역시 javascript 공부 겸 타입스크립트 경험.

개인적인 공부와 함께 여러가지 써보기로 결심하여 시작하게 됨. 
이것저것 찾아가보면서 할것인데, 기본적인 것들이 끝난후에 생각나는 것들이 있으면 순차적으로 만들어서 업데이트 할 예정.

기술이 부족한건지, 머리가 딸리는건지... 자꾸 뒤돌아보면 까먹는다는 느낌이 자꾸 들어서 어느샌가부터 복습을 안하면 쉴때도 재대로 쉬지도 못함.

javascript를 파보겠다고 책(자바스크립트 완벽가이드) 달달달 본지는 6개월이 넘었고(지금도 계속적으로 보는중..) 소스코드를 보면서 공부중인데.. 언제 머리가 트일지는..

****
Mutation은 database상태가 변화할때 사용되며, playground(localhost: 4000)에서 mutation을 이용해 db를 자유롭게 설정할수 있다.
설정할때는 query와 같이 deleteMovie, addMovie와 같은 함수를 만들어 사용하게 된다.
또한 schema에서 형식을 정해주는것 또한 중요하다.

yts의 open REST API를 이용해서 wrapping하는 방법(사용자들이 양을 제한하거나 영화에대한 특정 정보를 얻을수있는 방법)을 또한 사용해봤고, API키도 필요없으며 매번 자동적으로 업데이트 하기때문에 사용하기 편하다.

```
####REST란
어떤 자원에 대해 CRUD(Create, Read, Update, Delete) 연산을 수행하기 위해 URI(Resource)로 요청을 보내는 것으로, Get, Post 등의 방식(Method)을 사용하여 요청을 보내며, 요청을 위한 자원은 특정한 형태(Representation of Resource)으로 표현됩니다. 예를 들어, 우리는 게시글을 작성하기 위해 http://localhost:8080/bbs/insertBoardInfo라는 URI에 POST방식을 사용하여 JSON형태의 데이터를 전달할 수 있습니다. 위와 같이 CRUD 연산에 대한 요청을 할 때, 요청을 위한 Resource(자원, URI)와 이에 대한 Method(행위, POST) 그리고 Representation of Resource(자원의 형태, JSON)을 사용하면 표현이 명확해지므로 이를 REST라 하며, 이러한 규칙을 지켜서 설계된 API를 Rest API 또는 Restful한 API라고 합니다. 그리고 위에서 살짝 언급하였듯이, 이러한 Rest API는 Resource(자원), Method(행위), Representation of Resource(자원의 형태)로 구성됩니다.

출처: http://mangkyu.tistory.com/46
```

yarn add node-fetch 사용.
