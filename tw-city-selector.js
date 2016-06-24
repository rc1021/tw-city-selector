(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.App = factory());
}(this, function () { 'use strict';

  var country = ['台北市', '基隆市', '新北市', '宜蘭縣', '新竹縣市', '桃園縣', '苗栗縣', '台中市', '彰化縣', '南投縣', '嘉義縣', '雲林縣', '台南市', '高雄市', '澎湖縣', '屏東縣', '台東縣', '花蓮縣', '金門縣', '連江縣', '南海諸島', '釣魚台列嶼'];

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  console.log(country);

  function MyModule() {

    var defaultOptions = {
      // show: true
    };

    var options = arguments[0] || {};

    // Check options required
    _optionsRequired(options, ['el']);
    // Extend options
    this.options = _extendOptions(defaultOptions, options);
    // init
    this.init();
  };

  // --------------------
  // Public Methods
  // --------------------

  MyModule.prototype.init = function () {
    _init.call(this);
  };

  MyModule.prototype.open = function () {
    console.log('Module is opened');
  };

  // --------------------
  // Private Methods
  // --------------------

  function _init() {
    console.log('Module is init');
    console.log('Options: ', this.options);
  } // end

  function _optionsRequired() {
    var error = '';
    var options = arguments[0];
    var required = arguments[1];

    var length = required.length;
    while (length--) {
      if (!options.hasOwnProperty(required[length])) error += required[length] + ',';
    }

    if (error) throw '缺少參數 ' + error;
  } // end

  function _extendOptions(defaultOptions, options) {
    if (!options || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') return defaultOptions;

    var property;
    for (property in options) {
      defaultOptions[property] = options[property];
    }

    return defaultOptions;
  }

  return MyModule;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZW5ueS9Ecm9wYm94LzAxLee2suermeWwiOahiC9ESy1QbHVnaW5zL3R3LWNpdHktc2VsZWN0b3Ivc3JjL2RhdGEuanMiLCJfX2JhYmVsSGVscGVyc19fIiwiL1VzZXJzL2Rlbm55L0Ryb3Bib3gvMDEt57ay56uZ5bCI5qGIL0RLLVBsdWdpbnMvdHctY2l0eS1zZWxlY3Rvci9zcmMvdHctY2l0eS1zZWxlY3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIGNvdW50cnkgPSBbXG4gICflj7DljJfluIInLCAn5Z+66ZqG5biCJywgJ+aWsOWMl+W4gicsICflrpzomK3nuKMnLCAn5paw56u557ij5biCJywgJ+ahg+Wckue4oycsICfoi5fmoJfnuKMnLCAn5Y+w5Lit5biCJyxcbiAgJ+W9sOWMlue4oycsICfljZfmipXnuKMnLCAn5ZiJ576p57ijJywgJ+mbsuael+e4oycsICflj7DljZfluIInLCAn6auY6ZuE5biCJywgJ+a+jua5lue4oycsXG4gICflsY/mnbHnuKMnLCAn5Y+w5p2x57ijJywgJ+iKseiTrue4oycsICfph5HploDnuKMnLCAn6YCj5rGf57ijJywgJ+WNl+a1t+iruOWzticsICfph6PprZrlj7DliJfltrwnXG5dO1xuXG5leHBvcnQgdmFyIGRpc3RyaWN0ID0gW1xuICAvLyDlj7DljJfluIJcbiAgW1xuICAgIFsn5Lit5q2j5Y2AJywgJ+Wkp+WQjOWNgCcsICfkuK3lsbHljYAnLCAn5p2+5bGx5Y2AJywgJ+Wkp+WuieWNgCcsICfokKzoj6/ljYAnLCAn5L+h576p5Y2AJywgJ+Wjq+ael+WNgCcsXG4gICAgICAn5YyX5oqV5Y2AJywgJ+WFp+a5luWNgCcsICfljZfmuK/ljYAnLCAn5paH5bGx5Y2AJ1xuICAgIF0sXG4gICAgWycxMDAnLCAnMTAzJywgJzEwNCcsICcxMDUnLCAnMTA2JywgJzEwOCcsICcxMTAnLCAnMTExJywgJzExMicsICcxMTQnLCAnMTE1JywgJzExNiddXG4gIF0sXG4gIC8vIOWfuumahuW4glxuICBbXG4gICAgWyfku4HmhJvljYAnLCAn5L+h576p5Y2AJywgJ+S4reato+WNgCcsICfkuK3lsbHljYAnLCAn5a6J5qiC5Y2AJywgJ+aaluaaluWNgCcsICfkuIPloLXljYAnXSxcbiAgICBbJzIwMCcsICcyMDEnLCAnMjAyJywgJzIwMycsICcyMDQnLCAnMjA1JywgJzIwNiddXG4gIF0sXG4gIC8vIOaWsOWMl+W4glxuICBbXG4gICAgWyfokKzph4zljYAnLCAn6YeR5bGx5Y2AJywgJ+adv+api+WNgCcsICfmsZDmraLljYAnLCAn5rex5Z2R5Y2AJywgJ+efs+eih+WNgCcsICfnkZ7oirPljYAnLCAn5bmz5rqq5Y2AJyxcbiAgICAgICfpm5nmuqrljYAnLCAn6LKi5a+u5Y2AJywgJ+aWsOW6l+WNgCcsICflnarmnpfljYAnLCAn54OP5L6G5Y2AJywgJ+awuOWSjOWNgCcsICfkuK3lkozljYAnLCAn5Zyf5Z+O5Y2AJyxcbiAgICAgICfkuInls73pjq4nLCAn5qi55p6X5Y2AJywgJ+m2r+atjOmOricsICfkuInph43ljYAnLCAn5paw6I6K5Y2AJywgJ+azsOWxseWNgCcsICfmnpflj6PljYAnLCAn6JiG5rSy5Y2AJyxcbiAgICAgICfkupTogqHljYAnLCAn5YWr6YeM5Y2AJywgJ+a3oeawtOmOricsICfkuInoip3ljYAnLCAn55+z6ZaA5Y2AJ1xuICAgIF0sXG4gICAgWycyMDcnLCAnMjA4JywgJzIyMCcsICcyMjEnLCAnMjIyJywgJzIyMycsICcyMjQnLCAnMjI2JywgJzIyNycsICcyMjgnLFxuICAgICAgJzIzMScsICcyMzInLCAnMjMzJywgJzIzNCcsICcyMzUnLCAnMjM2JywgJzIzNycsICcyMzgnLCAnMjM5JywgJzI0MScsXG4gICAgICAnMjQyJywgJzI0MycsICcyNDQnLCAnMjQ3JywgJzI0OCcsICcyNDknLCAnMjUxJywgJzI1MicsICcyNTMnXG4gICAgXVxuICBdLFxuICAvLyDlrpzomK3nuKNcbiAgW1xuICAgIFsn5a6c6Jit5biCJywgJ+mgreWfjumOricsICfnpIHmuqrphIknLCAn5aOv5ZyN6YSJJywgJ+WToeWxsemEiScsICfnvoXmnbHpjq4nLCAn5LiJ5pif6YSJJywgJ+Wkp+WQjOmEiScsXG4gICAgICAn5LqU57WQ6YSJJywgJ+WGrOWxsemEiScsICfomIfmvrPpjq4nLCAn5Y2X5r6z6YSJJ1xuICAgIF0sXG4gICAgWycyNjAnLCAnMjYxJywgJzI2MicsICcyNjMnLCAnMjY0JywgJzI2NScsICcyNjYnLCAnMjY3JywgJzI2OCcsICcyNjknLFxuICAgICAgJzI3MCcsICcyNzInXG4gICAgXVxuICBdLFxuICAvLyDmlrDnq7nnuKPluIJcbiAgW1xuICAgIFsn5paw56u55biCJywgJ+erueWMl+W4gicsICfmuZblj6PphIknLCAn5paw6LGQ6YSJJywgJ+aWsOWflOmOricsICfpl5zopb/pjq4nLCAn6IqO5p6X6YSJJywgJ+WvtuWxsemEiScsXG4gICAgICAn56u55p2x6Y6uJywgJ+S6lOWzsOmEiScsICfmqavlsbHphIknLCAn5bCW55+z6YSJJywgJ+WMl+WflOmEiScsICfls6jnnInphIknXG4gICAgXSxcbiAgICBbJzMwMCcsICczMDInLCAnMzAzJywgJzMwNCcsICczMDUnLCAnMzA2JywgJzMwNycsICczMDgnLCAnMzEwJywgJzMxMScsXG4gICAgICAnMzEyJywgJzMxMycsICczMTQnLCAnMzE1J1xuICAgIF1cbiAgXSxcbiAgLy8g5qGD5ZyS57ijXG4gIFtcbiAgICBbJ+S4reWjouW4gicsICflubPpjq7luIInLCAn6b6N5r2t6YSJJywgJ+aliuaihemOricsICfmlrDlsYvphIknLCAn6KeA6Z+z6YSJJywgJ+ahg+WckuW4gicsICfpvpzlsbHphIknLFxuICAgICAgJ+WFq+W+t+W4gicsICflpKfmuqrpjq4nLCAn5b6p6IiI6YSJJywgJ+Wkp+WckumEiScsICfomIbnq7nphIknXG4gICAgXSxcbiAgICBbJzMyMCcsICczMjQnLCAnMzI1JywgJzMyNicsICczMjcnLCAnMzI4JywgJzMzMCcsICczMzMnLCAnMzM0JywgJzMzNScsXG4gICAgICAnMzM2JywgJzMzNycsICczMzgnXG4gICAgXVxuICBdLFxuICAvLyDoi5fmoJfnuKNcbiAgW1xuICAgIFsn56u55Y2X6Y6uJywgJ+mgreS7vemOricsICfkuInngaPphIknLCAn5Y2X5bqE6YSJJywgJ+eNhea9remEiScsICflvozpvo3pjq4nLCAn6YCa6ZyE6Y6uJywgJ+iLkeijoemOricsXG4gICAgICAn6IuX5qCX5biCJywgJ+mAoOapi+mEiScsICfpoK3lsYvphIknLCAn5YWs6aSo6YSJJywgJ+Wkp+a5lumEiScsICfms7DlronphIknLFxuICAgICAgJ+mKhemRvOmEiScsICfkuInnvqnphIknLCAn6KW/5rmW6YSJJywgJ+WNk+iYremOridcbiAgICBdLFxuICAgIFsnMzUwJywgJzM1MScsICczNTInLCAnMzUzJywgJzM1NCcsICczNTYnLCAnMzU3JywgJzM1OCcsICczNjAnLCAnMzYxJyxcbiAgICAgICczNjInLCAnMzYzJywgJzM2NCcsICczNjUnLCAnMzY2JywgJzM2NycsICczNjgnLCAnMzY5J1xuICAgIF1cbiAgXSxcbiAgLy8g5Y+w5Lit5biCXG4gIFtcbiAgICBbJ+S4reWNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+ilv+WNgCcsICfljJfljYAnLCAn5YyX5bGv5Y2AJywgJ+ilv+Wxr+WNgCcsICfljZflsa/ljYAnLCAn5aSq5bmz5Y2AJyxcbiAgICAgICflpKfph4zljYAnLCAn6Zyn5bOw5Y2AJywgJ+eDj+aXpeWNgCcsICfosZDljp/ljYAnLCAn5ZCO6YeM5Y2AJywgJ+efs+WyoeWNgCcsICfmnbHli6LljYAnLCAn5ZKM5bmz5Y2AJyxcbiAgICAgICfmlrDnpL7ljYAnLCAn5r2t5a2Q5Y2AJywgJ+Wkp+mbheWNgCcsICfnpZ7lsqHljYAnLCAn5aSn6IKa5Y2AJywgJ+aymem5v+WNgCcsICfpvo3kupXljYAnLCAn5qKn5qOy5Y2AJyxcbiAgICAgICfmuIXmsLTljYAnLCAn5aSn55Sy5Y2AJywgJ+WkluWflOWNgCcsICflpKflronljYAnXG4gICAgXSxcbiAgICBbJzQwMCcsICc0MDEnLCAnNDAyJywgJzQwMycsICc0MDQnLCAnNDA2JywgJzQwNycsICc0MDgnLCAnNDExJywgJzQxMicsXG4gICAgICAnNDEzJywgJzQxNCcsICc0MjAnLCAnNDIxJywgJzQyMicsICc0MjMnLCAnNDI0JywgJzQyNicsICc0MjcnLCAnNDI4JyxcbiAgICAgICc0MjknLCAnNDMyJywgJzQzMycsICc0MzQnLCAnNDM1JywgJzQzNicsICc0MzcnLCAnNDM4JywgJzQzOSdcbiAgICBdXG4gIF0sXG4gIC8vIOW9sOWMlue4o1xuICBbXG4gICAgWyflvbDljJbluIInLCAn6Iqs5ZyS6YSJJywgJ+iKseWjh+mEiScsICfnp4DmsLTphIknLCAn6bm/5riv6Y6uJywgJ+emj+iIiOmEiScsICfnt5ropb/phIknLCAn5ZKM576O6Y6uJyxcbiAgICAgICfkvLjmuK/phIknLCAn5ZOh5p6X6Y6uJywgJ+ekvumgremEiScsICfmsLjpnZbphIknLCAn5Z+U5b+D6YSJJywgJ+a6qua5lumOricsICflpKfmnZHphIknLCAn5Z+U6bm96YSJJyxcbiAgICAgICfnlLDkuK3pjq4nLCAn5YyX5paX6Y6uJywgJ+eUsOWwvumEiScsICfln6TpoK3phIknLCAn5rqq5bee6YSJJywgJ+erueWhmOmEiScsICfkuozmnpfpjq4nLCAn5aSn5Z+O6YSJJyxcbiAgICAgICfoirPoi5HphIknLCAn5LqM5rC06YSJJ1xuICAgIF0sXG4gICAgWyc1MDAnLCAnNTAyJywgJzUwMycsICc1MDQnLCAnNTA1JywgJzUwNicsICc1MDcnLCAnNTA4JywgJzUwOScsICc1MTAnLFxuICAgICAgJzUxMScsICc1MTInLCAnNTEzJywgJzUxNCcsICc1MTUnLCAnNTE2JywgJzUyMCcsICc1MjEnLCAnNTIyJywgJzUyMycsXG4gICAgICAnNTI0JywgJzUyNScsICc1MjYnLCAnNTI3JywgJzUyOCcsICc1MzAnXG4gICAgXVxuICBdLFxuICAvLyDljZfmipXnuKNcbiAgW1xuICAgIFsn5Y2X5oqV5biCJywgJ+S4reWvrumEiScsICfojYnlsa/pjq4nLCAn5ZyL5aeT6YSJJywgJ+WflOmHjOmOricsICfku4HmhJvphIknLCAn5ZCN6ZaT6YSJJywgJ+mbhumbhumOricsXG4gICAgICAn5rC06YeM6YSJJywgJ+mtmuaxoOmEiScsICfkv6HnvqnphIknLCAn56u55bGx6Y6uJywgJ+m5v+iwt+mEiSdcbiAgICBdLFxuICAgIFsnNTQwJywgJzU0MScsICc1NDInLCAnNTQ0JywgJzU0NScsICc1NDYnLCAnNTUxJywgJzU1MicsICc1NTMnLCAnNTU1JyxcbiAgICAgICc1NTYnLCAnNTU3JywgJzU1OCdcbiAgICBdXG4gIF0sXG4gIC8vIOWYiee+qee4o+W4glxuICBbXG4gICAgWyflmInnvqnluIInLCAn55Wq6Lev6YSJJywgJ+aiheWxsemEiScsICfnq7nltI7phIknLCAn6Zi/6YeM5bGxJywgJ+S4reWflOmEiScsICflpKfln5TphIknLCAn5rC05LiK6YSJJyxcbiAgICAgICfpub/ojYnphIknLCAn5aSq5L+d5biCJywgJ+actOWtkOW4gicsICfmnbHnn7PphIknLCAn5YWt6IWz6YSJJywgJ+aWsOa4r+mEiScsICfmsJHpm4TphIknLCAn5aSn5p6X6Y6uJyxcbiAgICAgICfmuqrlj6PphIknLCAn576p56u56YSJJywgJ+W4g+iii+mOridcbiAgICBdLFxuICAgIFsnNjAwJywgJzYwMicsICc2MDMnLCAnNjA0JywgJzYwNScsICc2MDYnLCAnNjA3JywgJzYwOCcsICc2MTEnLCAnNjEyJyxcbiAgICAgICc2MTMnLCAnNjE0JywgJzYxNScsICc2MTYnLCAnNjIxJywgJzYyMicsICc2MjMnLCAnNjI0JywgJzYyNSdcbiAgICBdXG4gIF0sXG4gIC8vIOmbsuael+e4o1xuICBbXG4gICAgWyfmlpfljZfpjq4nLCAn5aSn5Z+k6YSJJywgJ+iZjuWwvumOricsICflnJ/luqvpjq4nLCAn6KSS5b+g6YSJJywgJ+adseWLoumEiScsICflj7Dopb/phIknLCAn5bSZ6IOM6YSJJyxcbiAgICAgICfpuqXlr67phIknLCAn5paX5YWt5biCJywgJ+ael+WFp+mEiScsICflj6TlnZHphIknLCAn6I6/5qGQ6YSJJywgJ+ilv+ieuumOricsICfkuozltJnphIknLCAn5YyX5riv6Y6uJyxcbiAgICAgICfmsLTmnpfphIknLCAn5Y+j5rmW6YSJJywgJ+Wbm+a5lumEiScsICflhYPplbfphIknXG4gICAgXSxcbiAgICBbJzYzMCcsICc2MzEnLCAnNjMyJywgJzYzMycsICc2MzQnLCAnNjM1JywgJzYzNicsICc2MzcnLCAnNjM4JywgJzY0MCcsICc2NDMnLFxuICAgICAgJzY0NicsICc2NDcnLCAnNjQ4JywgJzY0OScsICc2NTEnLCAnNjUyJywgJzY1MycsICc2NTQnLCAnNjU1J1xuICAgIF1cbiAgXSxcbiAgLy8g5Y+w5Y2X5biCXG4gIFtcbiAgICBbJ+S4reilv+WNgCcsICfmnbHljYAnLCAn5Y2X5Y2AJywgJ+WMl+WNgCcsICflronlubPljYAnLCAn5a6J5Y2X5Y2AJywgJ+awuOW6t+WNgCcsICfmrbjku4HljYAnLCAn5paw5YyW5Y2AJyxcbiAgICAgICflt6bpjq7ljYAnLCAn546J5LqV5Y2AJywgJ+aloOilv+WNgCcsICfljZfljJbljYAnLCAn5LuB5b635Y2AJywgJ+mXnOW7n+WNgCcsICfpvo3ltI7ljYAnLCAn5a6Y55Sw5Y2AJyxcbiAgICAgICfpurvosYbljYAnLCAn5L2z6YeM5Y2AJywgJ+ilv+a4r+WNgCcsICfkuIPogqHljYAnLCAn5bCH6LuN5Y2AJywgJ+WtuOeUsuWNgCcsICfljJfploDljYAnLCAn5paw54ef5Y2AJyxcbiAgICAgICflvozlo4HljYAnLCAn55m95rKz5Y2AJywgJ+adseWxseWNgCcsICflha3nlLLljYAnLCAn5LiL54ef5Y2AJywgJ+afs+eHn+WNgCcsICfpub3msLTljYAnLCAn5ZaE5YyW5Y2AJyxcbiAgICAgICflpKflhafljYAnLCAn5bGx5LiK5Y2AJywgJ+aWsOW4guWNgCcsICflronlrprljYAnXG4gICAgXSxcbiAgICBbJzcwMCcsICc3MDEnLCAnNzAyJywgJzcwNCcsICc3MDgnLCAnNzA5JywgJzcxMCcsICc3MTEnLCAnNzEyJywgJzcxMycsICc3MTQnLFxuICAgICAgJzcxNScsICc3MTYnLCAnNzE3JywgJzcxOCcsICc3MTknLCAnNzIwJywgJzcyMScsICc3MjInLCAnNzIzJywgJzcyNCcsICc3MjUnLFxuICAgICAgJzcyNicsICc3MjcnLCAnNzMwJywgJzczMScsICc3MzInLCAnNzMzJywgJzczNCcsICc3MzUnLCAnNzM2JywgJzczNycsICc3NDEnLFxuICAgICAgJzc0MicsICc3NDMnLCAnNzQ0JywgJzc0NSdcbiAgICBdXG4gIF0sXG4gIC8vIOmrmOmbhOW4glxuICBbXG4gICAgWyfmlrDoiIjljYAnLCAn5YmN6YeR5Y2AJywgJ+iLk+mbheWNgCcsICfpub3ln5XljYAnLCAn6byT5bGx5Y2AJywgJ+aXl+a0peWNgCcsICfliY3pjq7ljYAnLCAn5LiJ5rCR5Y2AJyxcbiAgICAgICfmpaDmopPljYAnLCAn5bCP5riv5Y2AJywgJ+W3pueHn+WNgCcsICfku4HmrabljYAnLCAn5aSn56S+5Y2AJywgJ+WyoeWxseWNgCcsICfot6/nq7nljYAnLCAn6Zi/6JOu5Y2AJyxcbiAgICAgICfnlLDlr67ljYAnLCAn54eV5bei5Y2AJywgJ+api+mgreWNgCcsICfmopPlrpjljYAnLCAn5b2M6ZmA5Y2AJywgJ+awuOWuieWNgCcsICfmuZblhafljYAnLCAn6bOz5bGx5biCJyxcbiAgICAgICflpKflr67ljYAnLCAn5p6X5ZyS5Y2AJywgJ+mzpeadvuWNgCcsICflpKfmqLnljYAnLCAn5peX5bGx5Y2AJywgJ+e+jua/g+WNgCcsICflha3pvpzljYAnLCAn5YWn6ZaA5Y2AJyxcbiAgICAgICfmnYnmnpfljYAnLCAn55Sy5LuZ5Y2AJywgJ+ahg+a6kOWNgCcsICfpgqPnkarlpI/ljYAnLCAn6IyC5p6X5Y2AJywgJ+iMhOiQo+WNgCdcbiAgICBdLFxuICAgIFsnODAwJywgJzgwMScsICc4MDInLCAnODAzJywgJzgwNCcsICc4MDUnLCAnODA2JywgJzgwNycsICc4MTEnLCAnODEyJywgJzgxMycsXG4gICAgICAnODE0JywgJzgxNScsICc4MjAnLCAnODIxJywgJzgyMicsICc4MjMnLCAnODI0JywgJzgyNScsICc4MjYnLCAnODI3JywgJzgyOCcsXG4gICAgICAnODI5JywgJzgzMCcsICc4MzEnLCAnODMyJywgJzgzMycsICc4NDAnLCAnODQyJywgJzg0MycsICc4NDQnLCAnODQ1JywgJzg0NicsXG4gICAgICAnODQ3JywgJzg0OCcsICc4NDknLCAnODUxJywgJzg1MidcbiAgICBdXG4gIF0sXG4gIC8vIOa+jua5lue4o1xuICBbXG4gICAgWyfppqzlhazluIInLCAn6KW/5ba86YSJJywgJ+acm+WuiemEiScsICfkuIPnvo7phIknLCAn55m95rKZ6YSJJywgJ+a5luilv+mEiSddLFxuICAgIFsnODgwJywgJzg4MScsICc4ODInLCAnODgzJywgJzg4NCcsICc4ODUnXVxuICBdLFxuICAvLyDlsY/mnbHnuKNcbiAgW1xuICAgIFsn5bGP5p2x5biCJywgJ+S4ieWcsOmWgCcsICfpnKflj7DphIknLCAn55Gq5a626YSJJywgJ+S5neWmgumEiScsICfph4zmuK/phIknLCAn6auY5qi56YSJJywgJ+m5veWflOmEiScsXG4gICAgICAn6ZW35rK76YSJJywgJ+m6n+a0m+mEiScsICfnq7nnlLDphIknLCAn5YWn5Z+U6YSJJywgJ+iQrOS4uemEiScsICfmva7lt57pjq4nLCAn5rOw5q2m6YSJJywgJ+S+hue+qemEiScsXG4gICAgICAn6JCs5beS6YSJJywgJ+W0gemggumEiScsICfmlrDln6TphIknLCAn5Y2X5bee6YSJJywgJ+ael+mCiumEiScsICfmnbHmuK/pjq4nLCAn55CJ55CD6YSJJywgJ+S9s+WGrOmEiScsXG4gICAgICAn5paw5ZyS6YSJJywgJ+aei+WvrumEiScsICfmnovlsbHphIknLCAn5pil5pel6YSJJywgJ+eNheWtkOmEiScsICfou4rln47phIknLCAn54mh5Li56YSJJywgJ+aBhuaYpemOricsXG4gICAgICAn5ru/5bee6YSJJ1xuICAgIF0sXG4gICAgWyc5MDAnLCAnOTAxJywgJzkwMicsICc5MDMnLCAnOTA0JywgJzkwNScsICc5MDYnLCAnOTA3JywgJzkwOCcsICc5MDknLCAnOTExJyxcbiAgICAgICc5MTInLCAnOTEzJywgJzkyMCcsICc5MjEnLCAnOTIyJywgJzkyMycsICc5MjQnLCAnOTI1JywgJzkyNicsICc5MjcnLCAnOTI4JyxcbiAgICAgICc5MjknLCAnOTMxJywgJzkzMicsICc5NDAnLCAnOTQxJywgJzk0MicsICc5NDMnLCAnOTQ0JywgJzk0NScsICc5NDYnLCAnOTQ3J1xuICAgIF1cbiAgXSxcbiAgLy8g5Y+w5p2x57ijXG4gIFtcbiAgICBbJ+WPsOadseW4gicsICfntqDls7bphIknLCAn6Jit5ba86YSJJywgJ+W7tuW5s+mEiScsICfljZHljZfphIknLCAn6bm/6YeO6YSJJywgJ+mXnOWxsemOricsICfmtbfnq6/phIknLFxuICAgICAgJ+axoOS4iumEiScsICfmnbHmsrPphIknLCAn5oiQ5Yqf6Y6uJywgJ+mVt+a/semEiScsICflpKrpurvph4wnLCAn6YeR5bOw6YSJJywgJ+Wkp+atpumEiScsICfpgZTku4HphIknXG4gICAgXSxcbiAgICBbJzk1MCcsICc5NTEnLCAnOTUyJywgJzk1MycsICc5NTQnLCAnOTU1JywgJzk1NicsICc5NTcnLCAnOTU4JywgJzk1OScsICc5NjEnLFxuICAgICAgJzk2MicsICc5NjMnLCAnOTY0JywgJzk2NScsICc5NjYnXG4gICAgXVxuICBdLFxuICAvLyDoirHok67nuKNcbiAgW1xuICAgIFsn6Iqx6JOu5biCJywgJ+aWsOWfjumEiScsICfnp4DmnpfphIknLCAn5ZCJ5a6J6YSJJywgJ+WjveixkOmEiScsICfps7Pmnpfpjq4nLCAn5YWJ5b6p6YSJJywgJ+ixkOa/semEiScsXG4gICAgICAn55Ge56mX6YSJJywgJ+iQrOamrumEiScsICfnjonph4zpjq4nLCAn5Y2T5rqq6YSJJywgJ+WvjOmHjOmEiSdcbiAgICBdLFxuICAgIFsnOTcwJywgJzk3MScsICc5NzInLCAnOTczJywgJzk3NCcsICc5NzUnLCAnOTc2JywgJzk3NycsICc5NzgnLCAnOTc5JywgJzk4MScsXG4gICAgICAnOTgyJywgJzk4MydcbiAgICBdXG4gIF0sXG4gIC8vIOmHkemWgOe4o1xuICBbXG4gICAgWyfph5Hmspnpjq4nLCAn6YeR5rmW6Y6uJywgJ+mHkeWvp+mEiScsICfph5Hln47pjq4nLCAn54OI5ba86YSJJywgJ+eDj+WdtemEiSddLFxuICAgIFsnODkwJywgJzg5MScsICc4OTInLCAnODkzJywgJzg5NCcsICc4OTYnXVxuICBdLFxuICAvLyDpgKPmsZ/nuKNcbiAgW1xuICAgIFsn5Y2X56u/6YSJJywgJ+WMl+erv+mEiScsICfojpLlhYnphIknLCAn5p2x5byV6YSJJ10sXG4gICAgWycyMDknLCAnMjEwJywgJzIxMScsICcyMTInXVxuICBdLFxuICAvLyDljZfmtbfoq7jls7ZcbiAgW1xuICAgIFsn5p2x5rKZJywgJ+WNl+aymSddLFxuICAgIFsnODE3JywgJzgxOSddXG4gIF0sXG4gIC8vIOmHo+mtmuWPsOWIl+W2vFxuICBbXG4gICAgWyfph6PprZrlj7DliJfltrwnXSxcbiAgICBbJzI5MCddXG4gIF1cbl07XG4iLCJ2YXIgYmFiZWxIZWxwZXJzID0ge307XG5leHBvcnQgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuZXhwb3J0IHZhciBqc3ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmZvciAmJiBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSB8fCAweGVhYzc7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVSYXdSZWFjdEVsZW1lbnQodHlwZSwgcHJvcHMsIGtleSwgY2hpbGRyZW4pIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcztcbiAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMztcblxuICAgIGlmICghcHJvcHMgJiYgY2hpbGRyZW5MZW5ndGggIT09IDApIHtcbiAgICAgIHByb3BzID0ge307XG4gICAgfVxuXG4gICAgaWYgKHByb3BzICYmIGRlZmF1bHRQcm9wcykge1xuICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFwcm9wcykge1xuICAgICAgcHJvcHMgPSBkZWZhdWx0UHJvcHMgfHwge307XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDNdO1xuICAgICAgfVxuXG4gICAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkQXJyYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgICB0eXBlOiB0eXBlLFxuICAgICAga2V5OiBrZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiAnJyArIGtleSxcbiAgICAgIHJlZjogbnVsbCxcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIF9vd25lcjogbnVsbFxuICAgIH07XG4gIH07XG59KCk7XG5cbmV4cG9ydCB2YXIgYXN5bmNUb0dlbmVyYXRvciA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbmV4cG9ydCB2YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuZXhwb3J0IHZhciBkZWZpbmVFbnVtZXJhYmxlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGRlc2NzKSB7XG4gIGZvciAodmFyIGtleSBpbiBkZXNjcykge1xuICAgIHZhciBkZXNjID0gZGVzY3Nba2V5XTtcbiAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGRlc2MuZW51bWVyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSBkZXNjLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIGRlc2MpO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydCB2YXIgZGVmYXVsdHMgPSBmdW5jdGlvbiAob2JqLCBkZWZhdWx0cykge1xuICB2YXIga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRlZmF1bHRzKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGRlZmF1bHRzLCBrZXkpO1xuXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmNvbmZpZ3VyYWJsZSAmJiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IHZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5leHBvcnQgdmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5leHBvcnQgdmFyIF9pbnN0YW5jZW9mID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gIGlmIChyaWdodCAhPSBudWxsICYmIHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgcmlnaHRbU3ltYm9sLmhhc0luc3RhbmNlXSkge1xuICAgIHJldHVybiByaWdodFtTeW1ib2wuaGFzSW5zdGFuY2VdKGxlZnQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsZWZ0IGluc3RhbmNlb2YgcmlnaHQ7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufTtcblxuZXhwb3J0IHZhciBpbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqLmRlZmF1bHQgPSBvYmo7XG4gICAgcmV0dXJuIG5ld09iajtcbiAgfVxufTtcblxuZXhwb3J0IHZhciBuZXdBcnJvd0NoZWNrID0gZnVuY3Rpb24gKGlubmVyVGhpcywgYm91bmRUaGlzKSB7XG4gIGlmIChpbm5lclRoaXMgIT09IGJvdW5kVGhpcykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5zdGFudGlhdGUgYW4gYXJyb3cgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgb2JqZWN0RGVzdHJ1Y3R1cmluZ0VtcHR5ID0gZnVuY3Rpb24gKG9iaikge1xuICBpZiAob2JqID09IG51bGwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgZGVzdHJ1Y3R1cmUgdW5kZWZpbmVkXCIpO1xufTtcblxuZXhwb3J0IHZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuZXhwb3J0IHZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5leHBvcnQgdmFyIHNlbGZHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IGdsb2JhbDtcblxuZXhwb3J0IHZhciBzZXQgPSBmdW5jdGlvbiBzZXQob2JqZWN0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgc2V0KHBhcmVudCwgcHJvcGVydHksIHZhbHVlLCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjICYmIGRlc2Mud3JpdGFibGUpIHtcbiAgICBkZXNjLnZhbHVlID0gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHNldHRlciA9IGRlc2Muc2V0O1xuXG4gICAgaWYgKHNldHRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXR0ZXIuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCB2YXIgc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuZXhwb3J0IHZhciBzbGljZWRUb0FycmF5TG9vc2UgPSBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgIHZhciBfYXJyID0gW107XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgICBfYXJyLnB1c2goX3N0ZXAudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgdGFnZ2VkVGVtcGxhdGVMaXRlcmFsID0gZnVuY3Rpb24gKHN0cmluZ3MsIHJhdykge1xuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7XG4gICAgcmF3OiB7XG4gICAgICB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpXG4gICAgfVxuICB9KSk7XG59O1xuXG5leHBvcnQgdmFyIHRhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlID0gZnVuY3Rpb24gKHN0cmluZ3MsIHJhdykge1xuICBzdHJpbmdzLnJhdyA9IHJhdztcbiAgcmV0dXJuIHN0cmluZ3M7XG59O1xuXG5leHBvcnQgdmFyIHRlbXBvcmFsUmVmID0gZnVuY3Rpb24gKHZhbCwgbmFtZSwgdW5kZWYpIHtcbiAgaWYgKHZhbCA9PT0gdW5kZWYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IobmFtZSArIFwiIGlzIG5vdCBkZWZpbmVkIC0gdGVtcG9yYWwgZGVhZCB6b25lXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbn07XG5cbmV4cG9ydCB2YXIgdGVtcG9yYWxVbmRlZmluZWQgPSB7fTtcblxuZXhwb3J0IHZhciB0b0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyIDogQXJyYXkuZnJvbShhcnIpO1xufTtcblxuZXhwb3J0IHZhciB0b0NvbnN1bWFibGVBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gQXJyYXkoYXJyLmxlbmd0aCk7IGkgPCBhcnIubGVuZ3RoOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIpO1xuICB9XG59O1xuXG5iYWJlbEhlbHBlcnM7XG5cbmV4cG9ydCB7IF90eXBlb2YgYXMgdHlwZW9mLCBfZXh0ZW5kcyBhcyBleHRlbmRzLCBfaW5zdGFuY2VvZiBhcyBpbnN0YW5jZW9mIH0iLCIndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBNb2R1bGUgZXhwb3J0XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuZXhwb3J0IGRlZmF1bHQgTXlNb2R1bGU7IC8qIHVzZSByb2xsdXAgdG8gYnVpbGQgKi9cbi8vIG1vZHVsZS5leHBvcnRzID0gTXlNb2R1bGU7IC8qIHVzZSBicm93c2VyaWZ5IHRvIGJ1aWxkICovXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERlZmluZSBjb25zdHJ1Y3RvclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuaW1wb3J0IHsgY291bnRyeSwgZGlzdHJpY3QgfSBmcm9tICcuL2RhdGEuanMnO1xuXG5jb25zb2xlLmxvZyhjb3VudHJ5KTtcblxuZnVuY3Rpb24gTXlNb2R1bGUoKSB7XG4gIFxuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gc2hvdzogdHJ1ZVxuICB9O1xuICBcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMF0gfHwge307XG4gIFxuICAvLyBDaGVjayBvcHRpb25zIHJlcXVpcmVkXG4gIF9vcHRpb25zUmVxdWlyZWQob3B0aW9ucywgWydlbCddKTtcbiAgLy8gRXh0ZW5kIG9wdGlvbnNcbiAgdGhpcy5vcHRpb25zID0gX2V4dGVuZE9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAvLyBpbml0XG4gIHRoaXMuaW5pdCgpO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHVibGljIE1ldGhvZHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk15TW9kdWxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIF9pbml0LmNhbGwodGhpcyk7XG59O1xuXG5NeU1vZHVsZS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnTW9kdWxlIGlzIG9wZW5lZCcpO1xufTtcblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJpdmF0ZSBNZXRob2RzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBfaW5pdCgpIHtcbiAgY29uc29sZS5sb2coJ01vZHVsZSBpcyBpbml0Jyk7XG4gIGNvbnNvbGUubG9nKCdPcHRpb25zOiAnLCB0aGlzLm9wdGlvbnMpO1xufSAvLyBlbmRcblxuZnVuY3Rpb24gX29wdGlvbnNSZXF1aXJlZCgpIHtcbiAgdmFyIGVycm9yID0gJyc7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzBdO1xuICB2YXIgcmVxdWlyZWQgPSBhcmd1bWVudHNbMV07XG4gIFxuICB2YXIgbGVuZ3RoID0gcmVxdWlyZWQubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoISBvcHRpb25zLmhhc093blByb3BlcnR5KHJlcXVpcmVkW2xlbmd0aF0pKSAgICAgICAgICBcbiAgICAgIGVycm9yICs9IHJlcXVpcmVkW2xlbmd0aF0gKyAnLCc7XG4gIH1cbiAgXG4gIGlmIChlcnJvcikgdGhyb3cgJ+e8uuWwkeWPg+aVuCAnICsgZXJyb3I7XG59IC8vIGVuZFxuXG5mdW5jdGlvbiBfZXh0ZW5kT3B0aW9ucyhkZWZhdWx0T3B0aW9ucywgb3B0aW9ucykge1xuICBpZiAoISBvcHRpb25zIHx8IHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0JylcbiAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG4gIFxuICB2YXIgcHJvcGVydHk7XG4gIGZvciAocHJvcGVydHkgaW4gb3B0aW9ucykge1xuICAgIGRlZmF1bHRPcHRpb25zW3Byb3BlcnR5XSA9IG9wdGlvbnNbcHJvcGVydHldO1xuICB9XG4gIFxuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59IC8vIGVuZFxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztFQUFPLElBQUksVUFBVSxDQUNuQixLQURtQixFQUNaLEtBRFksRUFDTCxLQURLLEVBQ0UsS0FERixFQUNTLE1BRFQsRUFDaUIsS0FEakIsRUFDd0IsS0FEeEIsRUFDK0IsS0FEL0IsRUFFbkIsS0FGbUIsRUFFWixLQUZZLEVBRUwsS0FGSyxFQUVFLEtBRkYsRUFFUyxLQUZULEVBRWdCLEtBRmhCLEVBRXVCLEtBRnZCLEVBR25CLEtBSG1CLEVBR1osS0FIWSxFQUdMLEtBSEssRUFHRSxLQUhGLEVBR1MsS0FIVCxFQUdnQixNQUhoQixFQUd3QixPQUh4QixDQUFkLENBTVA7O0VDTE8sSUFBSSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsS0FBSyxRQUFRLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDMUcsRUFBQSxFQUFFLE9BQU8sT0FBTyxHQUFHLENBQUM7QUFDcEIsRUFBQSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDbkIsRUFBQSxFQUFFLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUM7QUFDbkcsRUFBQSxDQUFDLENBQUMsQUFFRixBQTJDQSxBQTZCQSxBQU1BLEFBa0JBLEFBV0EsQUFlQSxBQWVBLEFBY0EsQUF5QkEsQUFnQkEsQUFRQSxBQU1BLEFBaUJBLEFBTUEsQUFJQSxBQVlBLEFBUUEsQUFFQSxBQXNCQSxBQXNDQSxBQWtCQSxBQVFBLEFBS0EsQUFRQSxBQUVBLEFBSUEsQUFVQSxBQUVBOztFQzVXQSxRQUFRLEdBQVIsQ0FBWSxPQUFaOztBQUVBLEVBQUEsU0FBUyxRQUFULEdBQW9COztBQUVsQixFQUFBLE1BQUksaUJBQWlCOztBQUFBLEVBQUEsR0FBckI7O0FBSUEsRUFBQSxNQUFJLFVBQVUsVUFBVSxDQUFWLEtBQWdCLEVBQTlCOzs7QUFHQSxFQUFBLG1CQUFpQixPQUFqQixFQUEwQixDQUFDLElBQUQsQ0FBMUI7O0FBRUEsRUFBQSxPQUFLLE9BQUwsR0FBZSxlQUFlLGNBQWYsRUFBK0IsT0FBL0IsQ0FBZjs7QUFFQSxFQUFBLE9BQUssSUFBTDtBQUNELEVBQUE7Ozs7OztBQU9ELEVBQUEsU0FBUyxTQUFULENBQW1CLElBQW5CLEdBQTBCLFlBQVc7QUFDbkMsRUFBQSxRQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0QsRUFBQSxDQUZEOztBQUlBLEVBQUEsU0FBUyxTQUFULENBQW1CLElBQW5CLEdBQTBCLFlBQVc7QUFDbkMsRUFBQSxVQUFRLEdBQVIsQ0FBWSxrQkFBWjtBQUNELEVBQUEsQ0FGRDs7Ozs7O0FBU0EsRUFBQSxTQUFTLEtBQVQsR0FBaUI7QUFDZixFQUFBLFVBQVEsR0FBUixDQUFZLGdCQUFaO0FBQ0EsRUFBQSxVQUFRLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLEtBQUssT0FBOUI7QUFDRCxFQUFBOztBQUVELEVBQUEsU0FBUyxnQkFBVCxHQUE0QjtBQUMxQixFQUFBLE1BQUksUUFBUSxFQUFaO0FBQ0EsRUFBQSxNQUFJLFVBQVUsVUFBVSxDQUFWLENBQWQ7QUFDQSxFQUFBLE1BQUksV0FBVyxVQUFVLENBQVYsQ0FBZjs7QUFFQSxFQUFBLE1BQUksU0FBUyxTQUFTLE1BQXRCO0FBQ0EsRUFBQSxTQUFPLFFBQVAsRUFBaUI7QUFDZixFQUFBLFFBQUksQ0FBRSxRQUFRLGNBQVIsQ0FBdUIsU0FBUyxNQUFULENBQXZCLENBQU4sRUFDRSxTQUFTLFNBQVMsTUFBVCxJQUFtQixHQUE1QjtBQUNILEVBQUE7O0FBRUQsRUFBQSxNQUFJLEtBQUosRUFBVyxNQUFNLFVBQVUsS0FBaEI7QUFDWixFQUFBOztBQUVELEVBQUEsU0FBUyxjQUFULENBQXdCLGNBQXhCLEVBQXdDLE9BQXhDLEVBQWlEO0FBQy9DLEVBQUEsTUFBSSxDQUFFLE9BQUYsSUFBYSxRQUFPLE9BQVAseUNBQU8sT0FBUCxPQUFtQixRQUFwQyxFQUNFLE9BQU8sY0FBUDs7QUFFRixFQUFBLE1BQUksUUFBSjtBQUNBLEVBQUEsT0FBSyxRQUFMLElBQWlCLE9BQWpCLEVBQTBCO0FBQ3hCLEVBQUEsbUJBQWUsUUFBZixJQUEyQixRQUFRLFFBQVIsQ0FBM0I7QUFDRCxFQUFBOztBQUVELEVBQUEsU0FBTyxjQUFQO0FBQ0QsRUFBQTs7OzsifQ==