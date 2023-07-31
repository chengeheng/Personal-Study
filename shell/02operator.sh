# 算数运算法
a=10
b=20

echo `expr $a + $b`
echo `expr $a - $b`
echo `expr $a \* $b`
echo `expr $a / $b`

# 关系运算符，if中的空格不能少，支持数字，不支持字符串
# 相等
if [ $a -eq $b ]
then
    echo "$a -eq $b : a等于b"
else
    echo "$a -eq $b : a不等于b"
fi
# 不等
if [ $a -ne $b ]
then
    echo "$a -ne $b : a不等于b"
else
    echo "$a -ne $b : a等于b"
fi
# 大于
if [ $a -gt $b ]
then
    echo "$a -gt $b : a大于b"
else
    echo "$a -gt $b : a不大于b"
fi
# 小于
if [ $a -lt $b ]
then
    echo "$a -lt $b : a小于b"
else
    echo "$a -lt $b : a不小于b"
fi
# 大于等于
if [ $a -ge $b ]
then
    echo "$a -ge $b : a大于等于b"
else
    echo "$a -ge $b : a不大于等于b"
fi
# 小于等于
if [ $a -le $b ]
then
    echo "$a -le $b : a小于等于b"
else
    echo "$a -le $b : a不小于等于b"
fi

# 布尔运算符
if [ $a != $b ]
then
    echo "$a != $b : a不等于b"
else
    echo "$a != $b : a等于b"
fi

if [ $a -lt 100 -a $b -gt 15 ]
then
    echo "$a 小于 100 且 $b 大于 15 : 返回true"
else
    echo "$a 小于 100 且 $b 大于 15 : 返回false"
fi

if [ $a -lt 100 -o $b -gt 15 ]
then
    echo "$a 小于 100 或 $b 大于 15 : 返回true"
else
    echo "$a 小于 100 或 $b 大于 15 : 返回false"
fi

# 逻辑运算符
if [[ $a -lt 100 && $b -gt 15 ]]
then
    echo "$a 小于 100 且 $b 大于 15 : 返回true"
else
    echo "$a 小于 100 且 $b 大于 15 : 返回false"
fi
if [[ $a -lt 100 || $b -gt 15 ]]
then
    echo "$a 小于 100 或 $b 大于 15 : 返回true"
else
    echo "$a 小于 100 或 $b 大于 15 : 返回false"
fi

# 字符串运算符
c="abc"
d="abcd"
echo $c = $d
echo $c != $d
# 判断字符串长度是否等于0
echo -z $c
# 判断字符串长度是否不为0
echo -n $c
# 判断字符串是否为空
if [ $c ] 
then
    echo "$c 为空"
else
    echo "$c 不为空"
fi

# 文件操作运算符
file="/var/node/test.sh"
if [ -r $file ]
then
    echo "文件可读"
else
    echo "文件不可读"
fi
if [ -w $file ]
then
    echo "文件可写"
else
    echo "文件不可写"
fi
if [ -x $file ]
then
    echo "文件可执行"
else
    echo "文件不可执行"
fi
if [ -f $file ]
then
    echo "文件是普通文件"
else
    echo "文件不是普通文件"
fi
if [ -d $file ]
then
    echo "文件是目录"
else
    echo "文件不是目录"
fi
if [ -s $file ]
then
    echo "文件不为空"
else
    echo "文件为空"
fi
if [ -e $file ]
then
    echo "文件存在"
else
    echo "文件不存在"
fi