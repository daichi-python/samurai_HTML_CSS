const animal = {

  cat: { 'ペルシャ', '3歳' },

  dog: { 'プードル', '2歳' }

}

const user = {

  { name:'山田太郎', age:30 },

  { name:'田中俊哉', age:28 },

  { name:'木村涼子', age:23 }
  
}

const hero = {
  
  hp:100,
  exp:80,
  sword:12,
  magic:20,
  
  attack_sword: () => {
    return this.sword * ( this.exp / 100 );
  },
  attack_magic: () => {
    return this.magic * ( this.exp / 100 );
  }
  
}