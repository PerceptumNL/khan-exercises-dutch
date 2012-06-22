Khan.testExercise({"exercise":"power_rule","problems":[{"seed":1091785515,"type":"0","VARS":{"FUNC":{"f":["+",["*",2,["^","x",2]]],"ddxF":["+",["*",4,"x"]],"fText":"2x^{2}","ddxFText":"4x","notation":{"f":"y","ddxF":"y'","diffHint":"y=Ax^{n} \\implies y'=n \\cdot Ax^{n-1}"},"hints":["y=2x^{2} \\implies y' = 2 \\cdot 2x^{2-1} = 4x"],"wrongs":[["+",["*",4,["^","x",2]]],["+"],["+",["*",-4,"x"]],["+",["*",2,"x"]],["+",["*",-2,["^","x",2]]]],"wrongsText":["4x^{2}","","-4x","2x","-2x^{2}"]}},"solution":"4x","pass":"missing a wrong choice, and the hint refers to multiple terms when there's only one"},{"seed":81359142,"type":"0","VARS":{"FUNC":{"f":["+",["*",-3,["^","x",3]],["*",-3,["^","x",2]]],"ddxF":["+",["*",-9,["^","x",2]],["*",-6,"x"]],"fText":"-3x^{3}-3x^{2}","ddxFText":"-9x^{2}-6x","notation":{"f":"a","ddxF":"a'","diffHint":"a=Ax^{n} \\implies a'=n \\cdot Ax^{n-1}"},"hints":["a=-3x^{3} \\implies a' = 3 \\cdot -3x^{3-1} = -9x^{2}","a=-3x^{2} \\implies a' = 3 \\cdot -3x^{3-1} = -9x^{2}"],"wrongs":[["+",["*",-9,["^","x",3]],["*",-6,["^","x",2]]],["+",["*",-9,["^","x",2]]],["+",["*",9,["^","x",2]],["*",6,"x"]],["+",["*",-3,["^","x",2]],["*",-3,"x"]],["+",["*",3,["^","x",3]],["*",3,["^","x",2]]]],"wrongsText":["-9x^{3}-6x^{2}","-9x^{2}","9x^{2}+6x","-3x^{2}-3x","3x^{3}+3x^{2}"]}},"solution":"-9x^{2}-6x","pass":"shouldn't re-use a and a' to mean different things. also second derivative in intermediate hint is wrong"},{"seed":180212934,"type":"0","VARS":{"FUNC":{"f":["+",["*",7,["^","x",2]],["*",-3,"x"],1,["*",1,["^","x",-1]],["*",7,["^","x",-2]]],"ddxF":["+",["*",14,"x"],-3,["*",-1,["^","x",-2]],["*",-14,["^","x",-3]]],"fText":"7x^{2}-3x+1+x^{-1}+7x^{-2}","ddxFText":"14x-3-x^{-2}-14x^{-3}","notation":{"f":"f(x)","ddxF":"\\frac{d}{dx}f(x)","diffHint":"f(x)=Ax^{n} \\implies \\frac{d}{dx}f(x)=n \\cdot Ax^{n-1}"},"hints":["f(x)=7x^{2} \\implies \\frac{d}{dx}f(x) = 2 \\cdot 7x^{2-1} = 14x","f(x)=-3x \\implies \\frac{d}{dx}f(x) = 0 \\cdot 1x^{0-1} = 0","f(x)=1 \\implies \\frac{d}{dx}f(x) = -2 \\cdot 7x^{-2-1} = -14x^{-3}","f(x)=x^{-1} \\implies \\frac{d}{dx}f(x) = 1 \\cdot -3x^{1-1} = -3","f(x)=7x^{-2} \\implies \\frac{d}{dx}f(x) = -1 \\cdot 1x^{-1-1} = -1x^{-2}"],"wrongs":[["+",["*",14,["^","x",2]],["*",-3,"x"],["*",-1,["^","x",-1]],["*",-14,["^","x",-2]]],["+",["*",14,"x"],-1,["*",-14,["^","x",-1]]],["+",["*",-14,"x"],3,["*",1,["^","x",-2]],["*",14,["^","x",-3]]],["+",["*",7,"x"],-3,["*",1,["^","x",-1]],["*",1,["^","x",-2]],["*",7,["^","x",-3]]],["+",["*",-7,["^","x",2]],["*",3,"x"],-1,["*",-1,["^","x",-1]],["*",-7,["^","x",-2]]]],"wrongsText":["14x^{2}-3x-x^{-1}-14x^{-2}","14x-1-14x^{-1}","-14x+3+x^{-2}+14x^{-3}","7x-3+x^{-1}+x^{-2}+7x^{-3}","-7x^{2}+3x-1-x^{-1}-7x^{-2}"]}},"solution":"14x-3-x^{-2}-14x^{-3}","pass":"these intermediate hints are very confusing!"},{"seed":7367597,"type":"0","VARS":{"FUNC":{"f":["+",["*",7,["^","x",4]],["*",6,["^","x",3]],["*",1,["^","x",2]],-2,["*",-7,["^","x",-1]]],"ddxF":["+",["*",28,["^","x",3]],["*",18,["^","x",2]],["*",2,"x"],["*",7,["^","x",-2]]],"fText":"7x^{4}+6x^{3}+x^{2}-2-7x^{-1}","ddxFText":"28x^{3}+18x^{2}+2x+7x^{-2}","notation":{"f":"f(x)","ddxF":"f'(x)","diffHint":"f'(Ax^{n})=n \\cdot Ax^{n-1}"},"hints":["f'(7x^{4}) = 4 \\cdot 7x^{4-1} = 28x^{3}","f'(6x^{3}) = 2 \\cdot 1x^{2-1} = 2x","f'(x^{2}) = -1 \\cdot -7x^{-1-1} = 7x^{-2}","f'(-2) = 3 \\cdot 6x^{3-1} = 18x^{2}","f'(-7x^{-1}) = 0 \\cdot -2x^{0-1} = 0"],"wrongs":[["+",["*",28,["^","x",4]],["*",18,["^","x",3]],["*",2,["^","x",2]],["*",7,["^","x",-1]]],["+",["*",28,["^","x",3]],["*",18,["^","x",2]],["*",2,"x"],7],["+",["*",-28,["^","x",3]],["*",-18,["^","x",2]],["*",-2,"x"],["*",-7,["^","x",-2]]],["+",["*",7,["^","x",3]],["*",6,["^","x",2]],["*",1,"x"],["*",-2,["^","x",-1]],["*",-7,["^","x",-2]]],["+",["*",-7,["^","x",4]],["*",-6,["^","x",3]],["*",-1,["^","x",2]],2,["*",7,["^","x",-1]]]],"wrongsText":["28x^{4}+18x^{3}+2x^{2}+7x^{-1}","28x^{3}+18x^{2}+2x+7","-28x^{3}-18x^{2}-2x-7x^{-2}","7x^{3}+6x^{2}+x-2x^{-1}-7x^{-2}","-7x^{4}-6x^{3}-x^{2}+2+7x^{-1}"]}},"solution":"28x^{3}+18x^{2}+2x+7x^{-2}","pass":"/"},{"seed":137046000,"type":"0","VARS":{"FUNC":{"f":["+",["*",-6,["^","x",2]],["*",2,"x"],-3,["*",2,["^","x",-1]],["*",-3,["^","x",-2]]],"ddxF":["+",["*",-12,"x"],2,["*",-2,["^","x",-2]],["*",6,["^","x",-3]]],"fText":"-6x^{2}+2x-3+2x^{-1}-3x^{-2}","ddxFText":"-12x+2-2x^{-2}+6x^{-3}","notation":{"f":"f(x)","ddxF":"\\frac{d}{dx}f(x)","diffHint":"f(x)=Ax^{n} \\implies \\frac{d}{dx}f(x)=n \\cdot Ax^{n-1}"},"hints":["f(x)=-6x^{2} \\implies \\frac{d}{dx}f(x) = 2 \\cdot -6x^{2-1} = -12x","f(x)=2x \\implies \\frac{d}{dx}f(x) = 0 \\cdot -3x^{0-1} = 0","f(x)=-3 \\implies \\frac{d}{dx}f(x) = -2 \\cdot -3x^{-2-1} = 6x^{-3}","f(x)=2x^{-1} \\implies \\frac{d}{dx}f(x) = 1 \\cdot 2x^{1-1} = 2","f(x)=-3x^{-2} \\implies \\frac{d}{dx}f(x) = -1 \\cdot 2x^{-1-1} = -2x^{-2}"],"wrongs":[["+",["*",-12,["^","x",2]],["*",2,"x"],["*",-2,["^","x",-1]],["*",6,["^","x",-2]]],["+",["*",-12,"x"],-2,["*",6,["^","x",-1]]],["+",["*",12,"x"],-2,["*",2,["^","x",-2]],["*",-6,["^","x",-3]]],["+",["*",-6,"x"],2,["*",-3,["^","x",-1]],["*",2,["^","x",-2]],["*",-3,["^","x",-3]]],["+",["*",6,["^","x",2]],["*",-2,"x"],3,["*",-2,["^","x",-1]],["*",3,["^","x",-2]]]],"wrongsText":["-12x^{2}+2x-2x^{-1}+6x^{-2}","-12x-2+6x^{-1}","12x-2+2x^{-2}-6x^{-3}","-6x+2-3x^{-1}+2x^{-2}-3x^{-3}","6x^{2}-2x+3-2x^{-1}+3x^{-2}"]}},"solution":"None of the above.","pass":""},{"seed":93775556,"type":"0","VARS":{"FUNC":{"f":["+",["*",-1,["^","x",2]],["*",2,"x"],2],"ddxF":["+",["*",-2,"x"],2],"fText":"-x^{2}+2x+2","ddxFText":"-2x+2","notation":{"f":"a","ddxF":"\\frac{da}{dx}","diffHint":"a=Ax^{n} \\implies \\frac{da}{dx}=n \\cdot Ax^{n-1}"},"hints":["a=-x^{2} \\implies \\frac{da}{dx} = 2 \\cdot -1x^{2-1} = -2x","a=2x \\implies \\frac{da}{dx} = 0 \\cdot 2x^{0-1} = 0","a=2 \\implies \\frac{da}{dx} = 1 \\cdot 2x^{1-1} = 2"],"wrongs":[["+",["*",-2,["^","x",2]],["*",2,"x"]],["+",["*",-2,"x"],2],["+",["*",2,"x"],-2],["+",["*",-1,"x"],2,["*",2,["^","x",-1]]],["+",["*",1,["^","x",2]],["*",-2,"x"],-2]],"wrongsText":["-2x^{2}+2x","-2x+2","2x-2","-x+2+2x^{-1}","x^{2}-2x-2"]}},"solution":"-2x+2","pass":"why are the hints jumbled about?"},{"seed":15603928,"type":"0","VARS":{"FUNC":{"f":["+",["*",-5,["^","x",2]],["*",5,"x"],-1,["*",5,["^","x",-1]]],"ddxF":["+",["*",-10,"x"],5,["*",-5,["^","x",-2]]],"fText":"-5x^{2}+5x-1+5x^{-1}","ddxFText":"-10x+5-5x^{-2}","notation":{"f":"g(x)","ddxF":"g'(x)","diffHint":"g'(Ax^{n})=n \\cdot Ax^{n-1}"},"hints":["g'(-5x^{2}) = 2 \\cdot -5x^{2-1} = -10x","g'(5x) = 0 \\cdot -1x^{0-1} = 0","g'(-1) = 2 \\cdot -5x^{2-1} = -10x","g'(5x^{-1}) = 0 \\cdot -1x^{0-1} = 0"],"wrongs":[["+",["*",-10,["^","x",2]],["*",5,"x"],["*",-5,["^","x",-1]]],["+",["*",-10,"x"],-5],["+",["*",10,"x"],-5,["*",5,["^","x",-2]]],["+",["*",-5,"x"],5,["*",-1,["^","x",-1]],["*",5,["^","x",-2]]],["+",["*",5,["^","x",2]],["*",-5,"x"],1,["*",-5,["^","x",-1]]]],"wrongsText":["-10x^{2}+5x-5x^{-1}","-10x-5","10x-5+5x^{-2}","-5x+5-x^{-1}+5x^{-2}","5x^{2}-5x+1-5x^{-1}"]}},"solution":"-10x+5-5x^{-2}","pass":""},{"seed":100969827,"type":"0","VARS":{"FUNC":{"f":["+",["*",-7,["^","x",2]],["*",-6,"x"],6],"ddxF":["+",["*",-14,"x"],-6],"fText":"-7x^{2}-6x+6","ddxFText":"-14x-6","notation":{"f":"y","ddxF":"y'","diffHint":"y=Ax^{n} \\implies y'=n \\cdot Ax^{n-1}"},"hints":["y=-7x^{2} \\implies y' = 2 \\cdot -7x^{2-1} = -14x","y=-6x \\implies y' = 0 \\cdot 6x^{0-1} = 0","y=6 \\implies y' = 1 \\cdot -6x^{1-1} = -6"],"wrongs":[["+",["*",-14,["^","x",2]],["*",-6,"x"]],["+",["*",-14,"x"],-6],["+",["*",14,"x"],6],["+",["*",-7,"x"],-6,["*",6,["^","x",-1]]],["+",["*",7,["^","x",2]],["*",6,"x"],-6]],"wrongsText":["-14x^{2}-6x","-14x-6","14x+6","-7x-6+6x^{-1}","7x^{2}+6x-6"]}},"solution":"-14x-6","pass":""},{"seed":198791400,"type":"0","VARS":{"FUNC":{"f":["+",["*",-5,["^","x",3]],["*",-6,["^","x",2]]],"ddxF":["+",["*",-15,["^","x",2]],["*",-12,"x"]],"fText":"-5x^{3}-6x^{2}","ddxFText":"-15x^{2}-12x","notation":{"f":"g(x)","ddxF":"g'(x)","diffHint":"g'(Ax^{n})=n \\cdot Ax^{n-1}"},"hints":["g'(-5x^{3}) = 3 \\cdot -5x^{3-1} = -15x^{2}","g'(-6x^{2}) = 3 \\cdot -5x^{3-1} = -15x^{2}"],"wrongs":[["+",["*",-15,["^","x",3]],["*",-12,["^","x",2]]],["+",["*",-15,["^","x",2]]],["+",["*",15,["^","x",2]],["*",12,"x"]],["+",["*",-5,["^","x",2]],["*",-6,"x"]],["+",["*",5,["^","x",3]],["*",6,["^","x",2]]]],"wrongsText":["-15x^{3}-12x^{2}","-15x^{2}","15x^{2}+12x","-5x^{2}-6x","5x^{3}+6x^{2}"]}},"solution":"None of the above.","pass":""},{"seed":216462610,"type":"0","VARS":{"FUNC":{"f":["+",["*",3,["^","x",2]],["*",-6,"x"]],"ddxF":["+",["*",6,"x"],-6],"fText":"3x^{2}-6x","ddxFText":"6x-6","notation":{"f":"g(x)","ddxF":"g'(x)","diffHint":"g'(Ax^{n})=n \\cdot Ax^{n-1}"},"hints":["g'(3x^{2}) = 2 \\cdot 3x^{2-1} = 6x","g'(-6x) = 2 \\cdot 3x^{2-1} = 6x"],"wrongs":[["+",["*",6,["^","x",2]],["*",-6,"x"]],["+",["*",6,"x"]],["+",["*",-6,"x"],6],["+",["*",3,"x"],-6],["+",["*",-3,["^","x",2]],["*",6,"x"]]],"wrongsText":["6x^{2}-6x","6x","-6x+6","3x-6","-3x^{2}+6x"]}},"solution":"6x-6","pass":""}]});

