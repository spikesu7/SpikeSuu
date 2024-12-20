import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const StockTracker = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [stocks, setStocks] = useState([]);
    const [newUser, setNewUser] = useState({ username: '', password: '' });
    const [newStock, setNewStock] = useState({ name: '', cost: '', close: '' });
    const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });
    const [showRegister, setShowRegister] = useState(false);
    const [editingStock, setEditingStock] = useState(null);
    const [editFormData, setEditFormData] = useState({ name: '', cost: '', close: '' });
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [stockToDelete, setStockToDelete] = useState(null);

    // 从 LocalStorage 加载数据
    useEffect(() => {
        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const savedStocks = JSON.parse(localStorage.getItem('stocks')) || [];
        setUsers(savedUsers);
        setStocks(savedStocks);
    }, []);

    // 保存数据到 LocalStorage
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('stocks', JSON.stringify(stocks));
    }, [users, stocks]);

    // 用户注册
    const registerUser = () => {
        if (newUser.username && newUser.password) {
            setUsers([...users, { ...newUser, id: Date.now() }]);
            setNewUser({ username: '', password: '' });
            setShowRegister(false);
            alert('注册成功！');
        }
    };

    // 用户登录
    const loginUser = () => {
        const user = users.find(u => u.username === loginInfo.username && u.password === loginInfo.password);
        if (user) {
            setCurrentUser(user);
            setLoginInfo({ username: '', password: '' });
        } else {
            alert('用户名或密码错误');
        }
    };

    // 用户登出
    const logoutUser = () => setCurrentUser(null);

    // 删除账户
    const deleteAccount = () => {
        if (currentUser) {
            setUsers(users.filter(u => u.id !== currentUser.id));
            setCurrentUser(null);
        }
    };

    // 添加股票记录
    const addStock = () => {
        if (newStock.name && newStock.cost && newStock.close) {
            const stockData = {
                ...newStock,
                id: Date.now(),
                userId: currentUser.id,
                date: new Date().toISOString().split('T')[0],
            };
            setStocks([...stocks, stockData]);
            setNewStock({ name: '', cost: '', close: '' });
        }
    };

    // 开始编辑
    const startEdit = (stock) => {
        setEditingStock(stock.id);
        setEditFormData({
            name: stock.name,
            cost: stock.cost,
            close: stock.close
        });
    };

    // 保存编辑
    const saveEdit = (stockId) => {
        setStocks(stocks.map(stock => 
            stock.id === stockId
                ? { ...stock, ...editFormData }
                : stock
        ));
        setEditingStock(null);
        setEditFormData({ name: '', cost: '', close: '' });
    };

    // 取消编辑
    const cancelEdit = () => {
        setEditingStock(null);
        setEditFormData({ name: '', cost: '', close: '' });
    };

    // 删除股票记录
    const deleteStock = (stockId) => {
        setStocks(stocks.filter(stock => stock.id !== stockId));
    };

    // 计算收益（等权重和个股）
    const calculateReturns = () => {
        if (!currentUser) return [];
        const userStocks = stocks.filter(s => s.userId === currentUser.id);
        
        // 按日期分组计算等权重收益
        const dailyReturns = userStocks.reduce((acc, stock) => {
            if (!acc[stock.date]) {
                acc[stock.date] = {
                    totalReturn: 0,
                    count: 0,
                    stocks: []
                };
            }
            const returnRate = ((parseFloat(stock.close) - parseFloat(stock.cost)) / parseFloat(stock.cost)) * 100;
            acc[stock.date].totalReturn += returnRate;
            acc[stock.date].count += 1;
            acc[stock.date].stocks.push({
                ...stock,
                returnRate: returnRate
            });
            return acc;
        }, {});

        // 计算每天的总收益率并分配给每个股票记录
        const stocksWithReturns = [];
        Object.entries(dailyReturns).forEach(([date, data]) => {
            const weight = 100 / data.count;
            const dailyTotalReturn = data.stocks.reduce((sum, stock) => {
                return sum + (stock.returnRate * (weight / 100));
            }, 0);

            data.stocks.forEach(stock => {
                stocksWithReturns.push({
                    ...stock,
                    return: stock.returnRate,
                    weight: weight.toFixed(2),
                    dailyReturn: dailyTotalReturn.toFixed(2),
                    stockCount: data.count
                });
            });
        });

        return stocksWithReturns.sort((a, b) => new Date(a.date) - new Date(b.date));
    };

    const userReturns = calculateReturns();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">重生之-股神归来</h1>
            
            {!currentUser ? (
                <div className="max-w-md mx-auto space-y-4">
                    <div className="p-8 border rounded-lg bg-white shadow-sm">
                        <h2 className="text-xl font-medium mb-6 text-center text-gray-600">大盘稳不稳不重要，你来了就稳了！</h2>
                        <div className="space-y-4">
                            <Input
                                placeholder="用户名"
                                value={loginInfo.username}
                                onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
                                className="w-full"
                            />
                            <Input
                                placeholder="密码"
                                type="password"
                                value={loginInfo.password}
                                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                                className="w-full"
                            />
                            <Button onClick={loginUser} className="w-full">
                                登录
                            </Button>
                        </div>
                        
                        {!showRegister ? (
                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600 mb-2">还没有账户？</p>
                                <Button 
                                    variant="outline" 
                                    onClick={() => setShowRegister(true)}
                                    className="w-full"
                                >
                                    注册新账户
                                </Button>
                            </div>
                        ) : (
                            <div className="mt-8 pt-6 border-t">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-medium">创建新账户</h3>
                                    <Button 
                                        variant="ghost" 
                                        size="sm"
                                        onClick={() => setShowRegister(false)}
                                        className="text-gray-500"
                                    >
                                        取消
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <Input
                                        placeholder="用户名"
                                        value={newUser.username}
                                        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                                    />
                                    <Input
                                        placeholder="密码"
                                        type="password"
                                        value={newUser.password}
                                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    />
                                    <Button onClick={registerUser} className="w-full">
                                        创建账户
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">欢迎股神，{currentUser.username}</h2>
                        <div className="space-x-2">
                            <Button onClick={logoutUser} variant="outline">登出</Button>
                        </div>
                    </div>

                    <div className="p-6 border rounded-lg bg-white">
                        <h2 className="text-xl font-semibold mb-4">添加股票记录</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Input
                                placeholder="股票名称"
                                value={newStock.name}
                                onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
                            />
                            <Input
                                placeholder="成本价"
                                type="number"
                                value={newStock.cost}
                                onChange={(e) => setNewStock({ ...newStock, cost: e.target.value })}
                            />
                            <Input
                                placeholder="收盘价"
                                type="number"
                                value={newStock.close}
                                onChange={(e) => setNewStock({ ...newStock, close: e.target.value })}
                            />
                            <Button onClick={addStock}>添加股票</Button>
                        </div>
                    </div>

                    <div className="p-6 border rounded-lg bg-white">
                        <h2 className="text-xl font-semibold mb-4">您的股票记录</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-2 border text-left bg-gray-50">日期</th>
                                        <th className="p-2 border text-left bg-gray-50">股票名称</th>
                                        <th className="p-2 border text-left bg-gray-50">成本价</th>
                                        <th className="p-2 border text-left bg-gray-50">收盘价</th>
                                        <th className="p-2 border text-left bg-gray-50">收益率 (%)</th>
                                        <th className="p-2 border text-left bg-gray-50">权重 (%)</th>
                                        <th className="p-2 border text-left bg-gray-50">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userReturns.reduce((acc, stock) => {
                                        // 如果是新的日期，先添加日期汇总行
                                        if (!acc.find(item => item.date === stock.date)) {
                                            acc.push({
                                                id: `summary-${stock.date}`,
                                                date: stock.date,
                                                isSummary: true,
                                                dailyReturn: stock.dailyReturn
                                            });
                                        }
                                        // 添加股票行
                                        acc.push(stock);
                                        return acc;
                                    }, []).map(row => (
                                        row.isSummary ? (
                                            <tr key={row.id} className="bg-gray-100 font-semibold">
                                                <td className="p-2 border">{row.date}</td>
                                                <td className="p-2 border text-right" colSpan={5}>
                                                    当日收益率：{row.dailyReturn}%
                                                </td>
                                                <td className="p-2 border"></td>
                                            </tr>
                                        ) : (
                                            <tr key={row.id} className="hover:bg-gray-50">
                                                <td className="p-2 border">{row.date}</td>
                                                <td className="p-2 border">
                                                    {editingStock === row.id ? (
                                                        <Input
                                                            value={editFormData.name}
                                                            onChange={(e) => setEditFormData({
                                                                ...editFormData,
                                                                name: e.target.value
                                                            })}
                                                            className="w-full"
                                                        />
                                                    ) : (
                                                        row.name
                                                    )}
                                                </td>
                                                <td className="p-2 border">
                                                    {editingStock === row.id ? (
                                                        <Input
                                                            type="number"
                                                            value={editFormData.cost}
                                                            onChange={(e) => setEditFormData({
                                                                ...editFormData,
                                                                cost: e.target.value
                                                            })}
                                                            className="w-full"
                                                        />
                                                    ) : (
                                                        row.cost
                                                    )}
                                                </td>
                                                <td className="p-2 border">
                                                    {editingStock === row.id ? (
                                                        <Input
                                                            type="number"
                                                            value={editFormData.close}
                                                            onChange={(e) => setEditFormData({
                                                                ...editFormData,
                                                                close: e.target.value
                                                            })}
                                                            className="w-full"
                                                        />
                                                    ) : (
                                                        row.close
                                                    )}
                                                </td>
                                                <td className="p-2 border">{row.return.toFixed(2)}</td>
                                                <td className="p-2 border">{row.weight}%</td>
                                                <td className="p-2 border">
                                                    {editingStock === row.id ? (
                                                        <div className="flex space-x-2">
                                                            <Button 
                                                                size="sm"
                                                                onClick={() => saveEdit(row.id)}
                                                            >
                                                                保存
                                                            </Button>
                                                            <Button 
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={cancelEdit}
                                                            >
                                                                取消
                                                            </Button>
                                                            <Button 
                                                                variant="destructive"
                                                                size="sm"
                                                                onClick={() => confirmDelete(row)}
                                                            >
                                                                删除
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <div className="flex space-x-2">
                                                            <Button 
                                                                variant="outline"
                                                                size="sm"
                                                                onClick={() => startEdit(row)}
                                                            >
                                                                编辑
                                                            </Button>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="p-6 border rounded-lg bg-white">
                        <h2 className="text-xl font-semibold mb-4">收益曲线</h2>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={userReturns.filter((v, i, a) => 
                                    a.findIndex(t => t.date === v.date) === i // 只保留每个日期的第一条记录
                                )}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip formatter={(value) => value + '%'} />
                                    <Line 
                                        type="monotone" 
                                        dataKey="dailyReturn" 
                                        stroke="#8884d8" 
                                        name="日收益率"
                                        dot={{ r: 4 }}
                                        connectNulls
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StockTracker;