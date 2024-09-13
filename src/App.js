import React, { useState, useEffect, useCallback } from 'react';
import { 
  Card, CardContent, CardHeader, Typography, Button, Avatar, 
  Radio, RadioGroup, FormControlLabel, Dialog, DialogContent, 
  DialogTitle, TextField, Grid, Box
} from '@mui/material';
import heroes from './heroes';
import NonTargetedAdBanner from './NonTargetedAdBanner'; 

const draftOrder = ['team1', 'team2', 'team2', 'team1', 'team1', 'team2', 'team2', 'team1', 'team1', 'team2'];

const acceptableCombinations = [
  ['Tank', 'Assassin', 'Mage', 'Fighter', 'Marksman'],
  ['Support', 'Assassin', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Fighter', 'Mage', 'Fighter', 'Marksman'],
  ['Support', 'Fighter', 'Mage', 'Fighter', 'Marksman'],
  ['Support', 'Mage', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Mage', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Marksman', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Tank', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Support', 'Mage', 'Fighter', 'Marksman'],
  ['Tank', 'Support', 'Mage', 'Assassin', 'Marksman']
];

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

  const getTeamNeeds = (teamPicks) => {
    const requiredRoles = ['Tank', 'Marksman', 'Mage', 'Support', 'Assassin', 'Fighter'];
    const pickedRoles = teamPicks.map(hero => hero.role);
    const missingRoles = requiredRoles.filter(role => !pickedRoles.includes(role));
    return missingRoles;
  };
  
  const generateSuggestions = useCallback(() => {
    if (!draftStarted || !userTeam) return [];
  
    const currentTeamPicks = userTeam === 'team1' ? team1Picks : team2Picks;
    const enemyTeamPicks = userTeam === 'team1' ? team2Picks : team1Picks;
  
    // Get roles of current team's picks
    const currentTeamRoles = currentTeamPicks.map(hero => hero.role);
  
    // Determine acceptable combinations that are still possible
    const possibleCombinations = acceptableCombinations.filter(combination => {
      // Check if all picked roles are in the combination in correct counts
      return currentTeamRoles.every(role => {
        const pickedRoleCount = currentTeamRoles.filter(r => r === role).length;
        const combinationRoleCount = combination.filter(r => r === role).length;
        return pickedRoleCount <= combinationRoleCount;
      });
    });
  
    // If no possible combinations, return empty array
    if (possibleCombinations.length === 0) return [];
  
    // Determine missing roles from possible combinations
    const missingRolesSet = new Set();
    possibleCombinations.forEach(combination => {
      const combinationCopy = [...combination];
      currentTeamRoles.forEach(role => {
        const index = combinationCopy.indexOf(role);
        if (index !== -1) {
          combinationCopy.splice(index, 1);
        }
      });
      combinationCopy.forEach(role => missingRolesSet.add(role));
    });
  
    const missingRoles = Array.from(missingRolesSet);
  
    // Now, filter available heroes to those that have a missing role
    const availableHeroes = heroes.filter(hero => 
      !team1Picks.some(pickedHero => pickedHero.id === hero.id) && 
      !team2Picks.some(pickedHero => pickedHero.id === hero.id) &&
      missingRoles.includes(hero.role)
    );
  
    // Score the heroes as before
    const scoredHeroes = availableHeroes.map(hero => {
      let score = 0;
  
      // Add points for countering enemy picks
      enemyTeamPicks.forEach(enemyHero => {
        if (hero.counters.includes(enemyHero.id)) score += 2;
      });
  
      // Add points for synergy with own team
      currentTeamPicks.forEach(allyHero => {
        if (allyHero.favoriteAllies.includes(hero.id)) score += 2;
      });
  
      // Subtract points if enemy counters this hero
      enemyTeamPicks.forEach(enemyHero => {
        if (enemyHero.counters.includes(hero.id)) score -= 2;
      });
  
      return { ...hero, score };
    });
  
    // Sort the heroes by score
    return scoredHeroes.sort((a, b) => b.score - a.score).slice(0, 3);
  
  }, [team1Picks, team2Picks, userTeam, draftStarted]);
  
  

  useEffect(() => {
    if (draftStarted) {
      const newSuggestions = generateSuggestions();
      setSuggestions(newSuggestions);
    }
  }, [generateSuggestions, draftStarted]);

  const handlePick = (hero, team) => {
    // Controlla se l'eroe è già stato scelto
    if (team1Picks.includes(hero) || team2Picks.includes(hero)) {
      alert("This hero has already been chosen!");
      return;
    }
  
    // Aggiungi l'eroe alla squadra corretta
    if (team === 'team1') {
      setTeam1Picks(prev => [...prev, hero]);
    } else {
      setTeam2Picks(prev => [...prev, hero]);
    }
  
    // Aggiorna il turno corrente
    setCurrentTurnIndex(prev => (prev + 1) % draftOrder.length);
  
    // Dopo aver selezionato l'eroe, rigenera i suggerimenti per riflettere il cambiamento
    const newSuggestions = generateSuggestions();
    setSuggestions(newSuggestions);
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
  
    // Filtra gli eroi già selezionati da Team 1 e Team 2
    const filteredHeroes = heroes
      .filter(hero => 
        !team1Picks.includes(hero) && !team2Picks.includes(hero) // Escludi gli eroi già scelti
      )
      .filter(hero => 
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
                    style={{ 
                      height: '60px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      textAlign: 'center',
                      whiteSpace: 'normal',
                      wordBreak: 'break-word'
                    }}
                    disabled={team1Picks.includes(hero) || team2Picks.includes(hero)} // Disabilita se è già stato scelto
                  >
                    <Typography variant="body2">{hero.name}</Typography>
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
            <Box display="flex" flexDirection="column" gap={1} mb={2}>
              {team1Picks.map(hero => (
                <Typography key={hero.id} variant="body2">
                  {hero.name}
                </Typography>
              ))}
            </Box>
            <HeroSelector team="team1" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>Team 2 {userTeam === 'team2' ? '(Your Team)' : ''}</Typography>
            <Box display="flex" flexDirection="column" gap={1} mb={2}>
              {team2Picks.map(hero => (
                <Typography key={hero.id} variant="body2">
                  {hero.name}
                </Typography>
              ))}
            </Box>
            <HeroSelector team="team2" />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" gutterBottom>Suggestions</Typography>
            <Box display="flex" flexDirection="column" gap={1} mb={2}>
              {suggestions.map(hero => (
                <Button
                  key={hero.id}
                  variant="outlined"
                  onClick={() => handlePick(hero, currentTurn)}
                  disabled={currentTurn !== userTeam}
                  fullWidth
                >
                  {hero.name}
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