"use strict";
// import Cron from '@/api/models/cronJobs/cron';
// import { CronStatus } from '@/api/models/cronJobs/enums';
// import { ICron } from '@/api/models/cronJobs/types';
// import mongoose from 'mongoose';
// import { downloadFileFromFtp } from '../file/file';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronService = void 0;
// export class CronService {
//   async createCron(ftpId: mongoose.Types.ObjectId, operations: string[], createdBy?: mongoose.Types.ObjectId): Promise<ICron> {
//     const nextRun = new Date(Date.now() + 60 * 1000); // Schedule for 1 minute later
//     const cronJob = new Cron({
//       ftp: ftpId, 
//       operations,
//        schedule: nextRun.toISOString(),
//       status: CronStatus.PENDING,
//       nextRun,
//       // createdBy,
//     });
//     return await cronJob.save();
//   }
//   async getCronsByFtp(ftpId: mongoose.Types.ObjectId): Promise<ICron[]> {
//     return await Cron.find({ ftp: ftpId }).populate('ftp').exec();
//   }
//   async getAllCrons(): Promise<ICron[]> {
//     return await Cron.find().populate('ftp').exec();
//   }
//   async updateCronStatus(cronId: mongoose.Types.ObjectId, status: CronStatus, lastRun?: Date): Promise<ICron | null> {
//     const cronJob = await Cron.findById(cronId);
//     if (!cronJob) {
//       return null;
//     }
//     return await Cron.findByIdAndUpdate(
//       cronId,
//       { status, lastRun, nextRun: this.getNextRunTime(cronJob.schedule) },
//       { new: true }
//     )
//   }
//   async deleteCron(cronId: mongoose.Types.ObjectId): Promise<void> {
//     await Cron.findByIdAndDelete(cronId);
//   }
//   getNextRunTime(schedule: string): Date {
//     const nextRunDate = new Date(schedule); 
//     return nextRunDate;
//   }
//   async getRecentPendingCrons(givenTime: Date): Promise<ICron[]> {
//     const fifteenMinutesBefore = new Date(givenTime.getTime() - 1 * 60 * 1000);
//     try {
//       const crons = await Cron.find({
//         status: CronStatus.PENDING,
//         nextRun: {
//           $gte: fifteenMinutesBefore,
//           $lte: givenTime,
//         },
//       }).exec();
//       return crons;
//     } catch (error) {
//       console.error('Error fetching recent pending crons:', error);
//       throw error;
//     }
//   }
//   // async processCronJob(cronJob: ICron): Promise<void> {
//   //   if (cronJob.operations.includes('download')) {
//   //     console.log('Downloading file from ftp:', cronJob.ftp);
//   //     await downloadFileFromFtp(cronJob);
//   //   }
//   // }
//   async processCronJob(cronJob: ICron): Promise<void> {
//     if (cronJob.operations.includes('download')) {
//         console.log('Downloading files from FTP for:', cronJob.ftp);
//         await downloadFileFromFtp(cronJob); // Calls the updated function
//     }
// }
// }
// export default new CronService();
// import cron from 'node-cron';
// import Cron from '@/api/models/cronJobs/cron';
// import { CronStatus } from '@/api/models/cronJobs/enums';
// import { ICron } from '@/api/models/cronJobs/types';
// import mongoose from 'mongoose';
// import { downloadFileFromFtp } from '../file/file';
// export class CronService {
//   getCronsByFtp(arg0: mongoose.Types.ObjectId) {
//     throw new Error('Method not implemented.');
//   }
//   deleteCron(arg0: mongoose.Types.ObjectId) {
//     throw new Error('Method not implemented.');
//   }
//   async createCron(ftpId: mongoose.Types.ObjectId, operations: string[], createdBy?: mongoose.Types.ObjectId): Promise<ICron> {
//     const nextRun = new Date(Date.now() + 60 * 1000); // Schedule for 1 minute later
//     const cronJob = new Cron({
//       ftp: ftpId, 
//       operations,
//       nextRun,
//       schedule: nextRun.toISOString(),
//       status: CronStatus.PENDING,
//     });
//     const savedCron = await cronJob.save();
//     this.scheduleCronJob(savedCron); // Schedule execution
//     return savedCron;
//   }
//   async scheduleCronJob(cronJob: ICron) {
//     const cronTime = new Date(cronJob.schedule);
//     const cronExpression = `${cronTime.getMinutes()} ${cronTime.getHours()} * * *`; // Runs at scheduled time
//     cron.schedule(cronExpression, async () => {
//       console.log(`🔔 Running cron job for FTP ID: ${cronJob.ftp}`);
//       console.log(`Attempting to download file from: ${cronJob.ftppath}`);
//       await this.processCronJob(cronJob);
//     }, { timezone: 'UTC' });
//   }
//   async processCronJob(cronJob: ICron): Promise<void> {
//     if (cronJob.operations.includes('download')) {
//       console.log('Downloading files from FTP for:', cronJob.ftp);
//       await downloadFileFromFtp(cronJob);
//       await this.updateCronStatus(cronJob.id, CronStatus.COMPLETED, new Date());
//     }
//   }
//   async updateCronStatus(cronId: mongoose.Types.ObjectId, status: CronStatus, lastRun?: Date): Promise<ICron | null> {
//     return await Cron.findByIdAndUpdate(cronId, { status, lastRun }, { new: true });
//   }
//   // async getPendingCrons(p0: Date): Promise<ICron[]> {
//   //   return await Cron.find({ status: CronStatus.PENDING }).exec();
//   // }
//   async getPendingCrons(): Promise<ICron[]> {
//     return await Cron.find({ status: CronStatus.PENDING }).exec();
// }
//   async runPendingCrons() {
//     const crons = await this.getPendingCrons();
//     for (const cronJob of crons) {
//       this.scheduleCronJob(cronJob);
//     }
//   }
// }
// // Start processing pending jobs on service start
// const cronService = new CronService();
// cronService.runPendingCrons();
// export default cronService;
const node_cron_1 = __importDefault(require("node-cron"));
const cron_1 = __importDefault(require("@/api/models/cronJobs/cron"));
const enums_1 = require("@/api/models/cronJobs/enums");
const file_1 = require("../file/file");
class CronService {
    getCronsByFtp(arg0) {
        throw new Error('Method not implemented.');
    }
    deleteCron(arg0) {
        throw new Error('Method not implemented.');
    }
    // async createCron(ftpId: mongoose.Types.ObjectId, operations: string[], createdBy?: mongoose.Types.ObjectId): Promise<ICron> {
    //   const nextRun = new Date(Date.now() + 60 * 1000); // Schedule for 1 minute later
    //   const cronJob = new Cron({
    //     ftp: ftpId, 
    //     operations,
    //     nextRun,
    //     schedule: nextRun.toISOString(),
    //     status: CronStatus.PENDING,
    //   });
    //   const savedCron = await cronJob.save();
    //   this.scheduleCronJob(savedCron); // Schedule execution
    //   return savedCron;
    // }
    createCron(ftpId, operations, createdBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const nextRun = new Date(Date.now() + 60 * 1000); // Schedule for 1 minute later
            const cronJob = new cron_1.default({
                ftp: ftpId,
                operations,
                nextRun,
                schedule: nextRun.toISOString(),
                status: enums_1.CronStatus.PENDING,
            });
            const savedCron = yield cronJob.save();
            console.log(`✅ New FTP cron job created for ID: ${ftpId}`);
            this.scheduleCronJob(savedCron); // Schedule execution
            return savedCron;
        });
    }
    scheduleCronJob(cronJob) {
        return __awaiter(this, void 0, void 0, function* () {
            const cronTime = new Date(cronJob.schedule);
            const now = new Date();
            if (cronTime <= now) {
                // If time has passed, run it immediately
                console.log(`⏩ Running overdue cron job now for FTP ID: ${cronJob.ftp}`);
                yield this.processCronJob(cronJob);
            }
            else {
                // Otherwise, schedule it
                const cronExpression = `${cronTime.getMinutes()} ${cronTime.getHours()} * * *`;
                node_cron_1.default.schedule(cronExpression, () => __awaiter(this, void 0, void 0, function* () {
                    console.log(`🔔 Running scheduled cron job for FTP ID: ${cronJob.ftp}`);
                    yield this.processCronJob(cronJob);
                }), { timezone: 'UTC' });
            }
        });
    }
    // async processCronJob(cronJob: ICron): Promise<void> {
    //   if (cronJob.operations.includes('download')) {
    //     console.log('📥 Downloading files from FTP for:', cronJob.ftp);
    //     await downloadFileFromFtp(cronJob);
    //     await this.updateCronStatus(cronJob.id, CronStatus.COMPLETED, new Date());
    //   }
    // }
    processCronJob(cronJob) {
        return __awaiter(this, void 0, void 0, function* () {
            if (cronJob.operations.includes('download')) {
                console.log(`📥 Downloading files from FTP for ID: ${cronJob.ftp}`);
                try {
                    const result = yield (0, file_1.downloadFileFromFtp)(cronJob);
                    console.log(`✅ Download complete: ${result}`);
                }
                catch (error) {
                    console.error(`❌ Download failed for FTP ID: ${cronJob.ftp}`, error);
                }
                yield this.updateCronStatus(cronJob.id, enums_1.CronStatus.COMPLETED, new Date());
            }
        });
    }
    updateCronStatus(cronId, status, lastRun) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cron_1.default.findByIdAndUpdate(cronId, { status, lastRun }, { new: true });
        });
    }
    getPendingCrons() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield cron_1.default.find({ status: enums_1.CronStatus.PENDING }).exec();
        });
    }
    runPendingCrons() {
        return __awaiter(this, void 0, void 0, function* () {
            const crons = yield this.getPendingCrons();
            for (const cronJob of crons) {
                yield this.scheduleCronJob(cronJob);
            }
        });
    }
    // async createRecurringDownloadJob() {
    //   cron.schedule('*/1 * * * *', async () => {
    //     console.log('🔄 Running automated download job every 5 minutes...');
    //     // Check for new files on all active FTP sources
    //     const activeFtpJobs = await Cron.find({ status: CronStatus.PENDING }).exec();
    //     for (const cronJob of activeFtpJobs) {
    //       console.log(`📂 Checking for new files on FTP ID: ${cronJob.ftp}`);
    //       await this.processCronJob(cronJob);
    //     }
    //   }, { timezone: 'UTC' });
    // }
    createRecurringDownloadJob() {
        return __awaiter(this, void 0, void 0, function* () {
            node_cron_1.default.schedule('*/1 * * * *', () => __awaiter(this, void 0, void 0, function* () {
                console.log('🔄 Running automated download job every minute...');
                const activeFtpJobs = yield cron_1.default.find({ status: enums_1.CronStatus.PENDING }).exec();
                console.log(`Pending crons count: ${activeFtpJobs.length}`); // Debugging line
                if (activeFtpJobs.length === 0) {
                    console.log('❌ No pending FTP jobs found.');
                }
                for (const cronJob of activeFtpJobs) {
                    console.log(`📂 Processing FTP job for ID: ${cronJob.ftp}`);
                    yield this.processCronJob(cronJob);
                }
            }), { timezone: 'UTC' });
        });
    }
}
exports.CronService = CronService;
// Start processing pending jobs on service start
const cronService = new CronService();
cronService.runPendingCrons();
cronService.createRecurringDownloadJob(); // Automatically schedules a new job to check for new files
exports.default = cronService;
