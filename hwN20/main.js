    function squareRoots(a,b,c) {
        if (a == 0 && b == 0 && c == 0) {
            return {
                Roots: ['None'],
                Roots_Type: 'None'
            };
        }
        if (a == 0) {
            return {
                Roots: [(c / (-b))],
                Roots_Type: 'Real'
            };
        }

        let d=b*b-4*a*c;

        if ( d<0 ) {
            d = -d;
            const Re = (-b / (2 * a));
            const Im = (Math.sqrt(d)/(2*a));
            return {
                Roots: [ String(Re) + ' + i*' + String(Im), String(Re) + ' - i*' + String(Im)],
                Roots_Type: 'Complex'
            };
        }

        if ( d==0 )
            return {
                Roots: [ -b/(2*a) ],
                Roots_Type: 'Real'
            };

        const x1=(-b+Math.sqrt(d))/(2*a);
        const x2=(-b-Math.sqrt(d))/(2*a);
        return {
            Roots: [ x1, x2 ],
            Roots_Type: 'Real'
            };
    }

    function squareRootsTests() {

        {
            console.log('тест 1,1,1 -> 1 комплексный корень');
            const Answer=squareRoots(1,1,1);
            console.log(Answer.Roots);
            console.log((Answer.Roots_Type == 'Complex')?'пройден':'НЕ ПРОЙДЕН!');
        }

        {
            console.log('тест 1,-2,-3 -> два действительных корня 3,-1');
            const Answer=squareRoots(1,-2,-3);
            console.log(Answer.Roots);
            console.log( ((Answer.Roots_Type == 'Real')&&(Answer.Roots[0]==3)&&(Answer.Roots[1]==-1))
                ?'пройден':'НЕ ПРОЙДЕН!' );
        }

        {
            console.log('тест -1,-2,15 -> два действительных корня -5,3');
            const Answer=squareRoots(-1,-2,15);
            console.log(Answer.Roots);
            console.log( ((Answer.Roots_Type == 'Real')&&(Answer.Roots[0]==-5)&&(Answer.Roots[1]==3))
                ?'пройден':'НЕ ПРОЙДЕН!' )
        }

        {
            console.log('тест 1,12,36 -> один действительный корень -6');
            const Answer=squareRoots(1,12,36);
            console.log(Answer.Roots);
            console.log( ((Answer.Roots_Type == 'Real')&&(Answer.Roots[0]==-6))
                ?'пройден':'НЕ ПРОЙДЕН!' )
        }

        {
            console.log('тест 0,5,-10 -> один действительный корень 2');
            const Answer=squareRoots(0,5,-10);
            console.log(Answer.Roots);
            console.log( ((Answer.Roots_Type == 'Real')&&(Answer.Roots[0]==2))
                ?'пройден':'НЕ ПРОЙДЕН!' )
        }

    }

    function ttt() {
        const a=Number(prompt('Введите a'));
        const b=Number(prompt('Введите b'));
        const c=Number(prompt('Введите c'));
        const Answer=squareRoots(a,b,c);

        alert(`
        Тип найденного решения: ${Answer.Roots_Type}
        Количество найденных корней: ${Answer.Roots.length}
        ${(Answer.Roots.length == 2)?('Корни: '):('Корень: ')}
        ${(Answer.Roots.length == 2)?('1) ' + Answer.Roots[0]):(Answer.Roots[0])}
        ${(Answer.Roots.length == 2)?('2) ' + Answer.Roots[1]):('')}
        `);
    }

    /// Начнем тес
    squareRootsTests();