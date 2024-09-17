import  { useState } from 'react'
import { motion } from 'framer-motion'
import { styled, ThemeProvider, createTheme } from '@mui/material/styles'
import { Box, Typography, Avatar, Card, CardContent, IconButton, Fab, Tooltip, Zoom } from '@mui/material'
import { Home, List, Add, Settings, History, Wifi, SignalCellular4Bar, Battery90, TrendingUp, Notifications, AccountBalanceWallet } from '@mui/icons-material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6A1B9A',
    },
    secondary: {
      main: '#00BFA5',
    },
    background: {
      default: '#0A0E21',
      paper: '#1A1F38',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 16,
  },
})

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #6A1B9A 0%, #00BFA5 100%)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5),
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
}))

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid rgba(255, 255, 255, 0.18)',
}))

const CircularProgressWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 150,
  height: 150,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: '50%',
    background: theme.palette.background.paper,
  },
}))

const NavButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  padding: theme.spacing(1.5),
  '&:hover': {
    backgroundColor: 'rgba(0, 191, 165, 0.2)',
  },
}))

const EarningsChart = () => (
  <Box sx={{ height: 100, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
    {[30, 45, 60, 40, 50, 70, 55].map((height, index) => (
      <motion.div
        key={index}
        initial={{ height: 0 }}
        animate={{ height }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        style={{
          width: 8,
          backgroundColor: theme.palette.secondary.main,
          borderRadius: 4,
        }}
      />
    ))}
  </Box>
)

const SuperImpressiveEarningsApp = () => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GradientBackground>
            <GlassCard sx={{ width: 380, height: 800, overflow: 'hidden', position: 'relative' }}>
              {/* Status Bar */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 1, bgcolor: 'rgba(0, 0, 0, 0.2)' }}>
                <Typography variant="caption" sx={{ color: 'white' }}>20:13</Typography>
                <Box>
                  <IconButton size="small" sx={{ color: 'white' }}><Wifi fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: 'white' }}><SignalCellular4Bar fontSize="small" /></IconButton>
                  <IconButton size="small" sx={{ color: 'white' }}><Battery90 fontSize="small" /></IconButton>
                </Box>
              </Box>

              {/* Main Content */}
              <Box sx={{ p: 3, height: 'calc(100% - 112px)', overflowY: 'auto' }}>
                <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 800, color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    My Earnings
                  </Typography>
                </motion.div>

                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <GlassCard sx={{ mb: 3, overflow: 'hidden' }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ width: 60, height: 60, bgcolor: 'secondary.main', fontSize: 24, fontWeight: 'bold' }}>DS</Avatar>
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>Diya sharma</Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Premium Member</Typography>
                        </Box>
                      </Box>
                      <CircularProgressWrapper sx={{
                        background: (theme) => `conic-gradient(${theme.palette.secondary.main} 75%, transparent 75%, transparent 100%)`,
                      }}>
                        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>75%</Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>to next level</Typography>
                        </Box>
                      </CircularProgressWrapper>
                    </CardContent>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                  <GlassCard sx={{ mb: 3 }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>Total Earnings</Typography>
                      <Typography variant="h3" sx={{ fontWeight: 800, color: 'secondary.main', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                        ₹2,875.00
                      </Typography>
                      <EarningsChart />
                      <Box sx={{ mt: 2 }}>
                        {[
                          { label: 'Self Earnings', value: 8, color: '#FF6B6B', icon: <AccountBalanceWallet /> },
                          { label: 'Referral Earnings', value: 2867, color: '#4ECDC4', icon: <TrendingUp /> },
                          { label: 'Reward Earnings', value: 0, color: '#45B7D1', icon: <Notifications /> },
                        ].map((item, index) => (
                          <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Avatar sx={{ bgcolor: item.color, mr: 1, width: 24, height: 24 }}>
                              {item.icon}
                            </Avatar>
                            <Typography variant="body2" sx={{ flexGrow: 1, color: 'rgba(255, 255, 255, 0.7)' }}>{item.label}</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>₹{item.value.toFixed(2)}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </GlassCard>
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
                  <GlassCard>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>Recent Activity</Typography>
                      {[
                        { action: 'Referral Bonus', amount: '₹2.00', time: '3s ago', icon: '🎉' },
                        { action: 'KYC Completed', amount: '₹5.00', time: '2d ago', icon: '✅' },
                        { action: 'New Referral', amount: '₹1.00', time: '1w ago', icon: '👥' },
                      ].map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className='text-[#000000]'
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Avatar sx={{ bgcolor: 'primary.main', color: 'white', mr: 2 }}>{activity.icon}</Avatar>
                            <Box sx={{ flexGrow: 1 }}>
                              <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>{activity.action}</Typography>
                              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{activity.time}</Typography>
                            </Box>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: 'white' }}>{activity.amount}</Typography>
                          </Box>
                        </motion.div>
                      ))}
                    </CardContent>
                  </GlassCard>
                </motion.div>
              </Box>

              {/* Bottom Navigation */}
              <Box sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                display: 'flex', 
                justifyContent: 'space-around', 
                alignItems: 'center', 
                py: 2,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
              }}>
                {[
                  { icon: <Home />, label: 'Home' },
                  { icon: <List />, label: 'Transactions' },
                  { icon: <Settings />, label: 'Settings' },
                  { icon: <History />, label: 'History' },
                ].map((item) => (
                  <Tooltip key={item.label} title={item.label} TransitionComponent={Zoom}>
                    <NavButton
                      sx={{
                        color: activeTab === item.label.toLowerCase() ? 'secondary.main' : 'text.secondary',
                        backgroundColor: activeTab === item.label.toLowerCase() ? 'rgba(0, 191, 165, 0.1)' : 'transparent',
                      }}
                      onClick={() => setActiveTab(item.label.toLowerCase())}
                    >
                      {item.icon}
                    </NavButton>
                  </Tooltip>
                ))}
              </Box>
              <Tooltip title="Add Transaction" TransitionComponent={Zoom}>
                <Fab
                  color="secondary"
                  aria-label="add"
                  sx={{
                    position: 'absolute',
                    bottom: 70,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    boxShadow: '0 4px 20px rgba(0, 191, 165, 0.5)',
                  }}
                >
                  <Add />
                </Fab>
              </Tooltip>
            </GlassCard>
          </GradientBackground>
        </motion.div>
      </Box>
    </ThemeProvider>
  )
}

export default SuperImpressiveEarningsApp