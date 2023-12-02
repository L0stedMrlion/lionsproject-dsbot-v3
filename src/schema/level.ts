import { Schema, model } from 'mongoose';

interface Level {
  userId: string;
  guildId: string;
  xp: number;
  level: number;
}

const levelSchema = new Schema<Level>({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 }
});

export const LevelModel = model('Level', levelSchema);
