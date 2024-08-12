import React, { useState, useEffect, useCallback } from 'react';
import { 
  Card, CardContent, CardHeader, Typography, Button, Avatar, 
  Radio, RadioGroup, FormControlLabel, Dialog, DialogContent, 
  DialogTitle, TextField, Grid, Box
} from '@mui/material';
import heroes from './heroes';
import NonTargetedAdBanner from './NonTargetedAdBanner'; 

const draftOrder = ['team1', 'team2', 'team2', 'team1', 'team1', 'team2', 'team2', 'team1', 'team1', 'team2'];

const DraftAssistant = () => {
  const [userTeam, setUserTeam] = useState(null);
  const [team1Picks, setTeam1Picks] = useState([]);
  const [team2Picks, setTeam2Picks] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [draftStarted, setDraftStarted] = useState(false);

  const currentTurn = draftOrder[currentTurnIndex];

  useEffect(() => {
    if (draftStarted) {
      const newSuggestions = generateSuggestions();
      setSuggestions(newSuggestions);
    }
  }, [team1Picks, team2Picks, draftStarted, currentTurnIndex, userTeam]);

  const generateSuggestions = useCallback(() => {
    if (!draftStarted || !userTeam) return [];

    const currentTeamPicks = userTeam === 'team1' ? team1Picks : team2Picks;
    const enemyTeamPicks = userTeam === 'team1' ? team2Picks : team1Picks;
    
    const availableHeroes = heroes.filter(h => 
      !team1Picks.includes(h) && !team2Picks.includes(h)
    );

    const scoredHeroes = availableHeroes.map(hero => {
      let score = 0;
      
      enemyTeamPicks.forEach(enemyHero => {
        if (hero.counters.includes(enemyHero.id)) score += 2;
      });

      currentTeamPicks.forEach(allyHero => {
        if (allyHero.favoriteAllies.includes(hero.id)) score += 1;
      });

      enemyTeamPicks.forEach(enemyHero => {
        if (enemyHero.counters.includes(hero.id)) score -= 1;
      });

      return { ...hero, score };
    });

    return scoredHeroes.sort((a, b) => b.score - a.score).slice(0, 3);
  }, [team1Picks, team2Picks, userTeam, draftStarted]);

  useEffect(() => {
    if (draftStarted) {
      const newSuggestions = generateSuggestions();
      setSuggestions(newSuggestions);
    }
  }, [generateSuggestions, draftStarted]);

  const handlePick = (hero, team) => {
    if (team1Picks.includes(hero) || team2Picks.includes(hero)) {
      alert("This hero has already been chosen!");
      return;
    }
    
    if (team === 'team1') {
      setTeam1Picks(prev => [...prev, hero]);
    } else {
      setTeam2Picks(prev => [...prev, hero]);
    }
    setCurrentTurnIndex(prev => (prev + 1) % draftOrder.length);
  };

  const startDraft = () => {
    if (userTeam) {
      setDraftStarted(true);
    } else {
      alert("Please select your team before starting!");
    }
  };

  const HeroSelector = ({ team }) => {
    const [open, setOpen] = useState(false);
    const [localSearchTerm, setLocalSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      event.stopPropagation();
      setLocalSearchTerm(event.target.value);
    };

    const filteredHeroes = heroes.filter(hero => 
      hero.name.toLowerCase().includes(localSearchTerm.toLowerCase()) ||
      hero.role.toLowerCase().includes(localSearchTerm.toLowerCase())
    );
  
    return (
      <>
        <Button variant="outlined" disabled={currentTurn !== team} onClick={() => setOpen(true)}>
          Select Hero for {team}
        </Button>
        <Dialog open={open} onClose={() => {
          setOpen(false);
          setLocalSearchTerm('');
        }}>
          <DialogTitle>Select a Hero for {team}</DialogTitle>
          <DialogContent>
            <TextField 
              placeholder="Search for a hero..." 
              value={localSearchTerm}
              onChange={handleSearchChange}
              onClick={(e) => e.stopPropagation()}
              fullWidth
              margin="normal"
            />
            <Grid container spacing={1} style={{ maxHeight: '300px', overflowY: 'auto' }}>
              {filteredHeroes.map(hero => (
                <Grid item xs={4} key={hero.id}>
                  <Button 
                    onClick={() => {
                      handlePick(hero, team);
                      setLocalSearchTerm('');
                      setOpen(false);
                    }}
                    variant="outlined"
                    fullWidth
                    style={{ height: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                    disabled={team1Picks.includes(hero) || team2Picks.includes(hero)}
                  >
                    <Avatar style={{ marginBottom: '4px' }}>{hero.name[0]}</Avatar>
                    <Typography variant="caption">{hero.name}</Typography>
                  </Button>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  if (!draftStarted) {
    return (
      <Card style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
        <CardHeader title="Start the Draft" />
        <CardContent>
          <RadioGroup onChange={(e) => setUserTeam(e.target.value)}>
            <FormControlLabel value="team1" control={<Radio />} label="My team is Team 1" />
            <FormControlLabel value="team2" control={<Radio />} label="My team is Team 2" />
          </RadioGroup>
          <Button onClick={startDraft} fullWidth style={{ marginTop: '16px' }}>Start Draft</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <CardHeader title={<Typography variant="h5">Mobile Legends Draft Assistant</Typography>} />
      <CardContent>
      <NonTargetedAdBanner />

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>Team 1 {userTeam === 'team1' ? '(Your Team)' : ''}</Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
              {team1Picks.map(hero => (
                <Avatar key={hero.id}>{hero.name[0]}</Avatar>
              ))}
            </Box>
            <HeroSelector team="team1" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>Team 2 {userTeam === 'team2' ? '(Your Team)' : ''}</Typography>
            <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
              {team2Picks.map(hero => (
                <Avatar key={hero.id}>{hero.name[0]}</Avatar>
              ))}
            </Box>
            <HeroSelector team="team2" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>Suggestions</Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {suggestions.map(hero => (
                <Button 
                  key={hero.id} 
                  onClick={() => handlePick(hero, userTeam)}
                  disabled={currentTurn !== userTeam || team1Picks.includes(hero) || team2Picks.includes(hero)}
                  variant="contained"
                  fullWidth
                  style={{ justifyContent: 'flex-start', padding: '8px' }}
                >
                  <Avatar style={{ marginRight: '8px' }}>{hero.name[0]}</Avatar>
                  <Typography variant="body2">{hero.name} ({hero.role})</Typography>
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography style={{ marginTop: '16px' }}>
          Current Turn: {currentTurn === 'team1' ? 'Team 1' : 'Team 2'} (Pick {currentTurnIndex + 1}/10)
        </Typography>
        <Typography 
        style={{ 
          width: '100%', 
          maxWidth: '800px', 
          margin: '20px auto', 
          textAlign: 'center',
          fontSize: '14px',
          color: '#666'
        }}
      >
        If you know MLBB, its characters, various counters, and best allies, send a DM on Instagram to @mlbb_draft_assistant. Also, write to us if you encounter any bugs or simply want to help and tell us how the application can be improved.
      </Typography>
      </CardContent>
    </Card>
  );
};

export default DraftAssistant;