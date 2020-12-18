import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLikes1608255074980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:'likes',
                columns:[
                    {
                        name:'id',
                        type:'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'piuId',
                        type: 'varchar',
                    },
                    {
                        name: 'userId',
                        type: 'varchar',
                    },
                ],
                foreignKeys:[
                    {
                        columnNames: ['piuId'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'pius',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    },
                    {
                        columnNames: ['userId'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'users',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('likes');
    }

}
