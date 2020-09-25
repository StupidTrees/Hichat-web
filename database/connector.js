/**
 * 使用sequelize进行mysql连接
 * @type {{QueryTypes; useInflection(inflection: Inflector): void; Utils; Op; IndexHints; Optional: Optional; validator; Deferrable; Error; TableHints; DataTypes; Sequelize: Sequelize; SyncAlterOptions: SyncAlterOptions; QueryOptionsTransactionRequired: QueryOptionsTransactionRequired; Config: Config; json(conditionsOrPath: (string | object), value?: (string | number | boolean)): Json; or(...args: WhereOperators | WhereAttributeHash<any> | Where[]): OrOperator<any>; PoolOptions: PoolOptions; DefaultSetOptions: DefaultSetOptions; col(col: string): Col; AttributeType: AttributeType; SyncOptions: SyncOptions; OperatorsAliases: OperatorsAliases; cast(val: unknown, type: string): Cast; fn(fn: string, ...args: unknown[]): Fn; RetryOptions: RetryOptions; Options: Options; ReplicationOptions: ReplicationOptions; literal(val: string): Literal; and(...args: WhereOperators | WhereAttributeHash<any> | Where[]): AndOperator<any>; LogicType: LogicType; Dialect: Dialect; where: {(attr: AttributeType, comparator: (string | symbol), logic: LogicType): Where; (attr: AttributeType, logic: LogicType): Where}; ConnectionOptions: ConnectionOptions; AddForeignKeyConstraintOptions: AddForeignKeyConstraintOptions; QueryInterfaceCreateTableOptions: QueryInterfaceCreateTableOptions; IndexMethod: IndexMethod; QueryOptions: QueryOptions; IndexType: IndexType; QueryOptionsWithForce: QueryOptionsWithForce; QueryOptionsWithWhere: QueryOptionsWithWhere; BindOrReplacements: BindOrReplacements; AddPrimaryKeyConstraintOptions: AddPrimaryKeyConstraintOptions; QueryInterfaceOptions: QueryInterfaceOptions; ColumnDescription: ColumnDescription; FieldMap: FieldMap; AddCheckConstraintOptions: AddCheckConstraintOptions; CollateCharsetOptions: CollateCharsetOptions; ColumnsDescription: ColumnsDescription; QueryOptionsWithType: QueryOptionsWithType; TableNameWithSchema: TableNameWithSchema; QueryInterfaceDropTableOptions: QueryInterfaceDropTableOptions; IndexesOptions: IndexesOptions; AddUniqueConstraintOptions: AddUniqueConstraintOptions; TableName: TableName; QueryInterfaceDropAllTablesOptions: QueryInterfaceDropAllTablesOptions; QueryInterfaceIndexOptions: QueryInterfaceIndexOptions; QueryInterface: QueryInterface; FunctionParam: FunctionParam; AddDefaultConstraintOptions: AddDefaultConstraintOptions; CreateDatabaseOptions: CreateDatabaseOptions; BaseConstraintOptions: BaseConstraintOptions; QueryOptionsWithModel: QueryOptionsWithModel; AddConstraintOptions: AddConstraintOptions; MediumIntegerDataTypeConstructor: MediumIntegerDataTypeConstructor; VirtualDataType: VirtualDataType; EnumDataTypeConstructor: EnumDataTypeConstructor; BlobSize: BlobSize; BlobDataTypeConstructor: BlobDataTypeConstructor; GeometryDataTypeOptions: GeometryDataTypeOptions; DecimalDataTypeOptions: DecimalDataTypeOptions; MACADDR: AbstractDataTypeConstructor; DataType: DataType; RangeDataTypeConstructor: RangeDataTypeConstructor; GEOGRAPHY: GeographyDataTypeConstructor; TIME: AbstractDataTypeConstructor; NumberDataType: NumberDataType; NumberDataTypeOptions: NumberDataTypeOptions; ArrayDataType: ArrayDataType; UUIDV4: AbstractDataTypeConstructor; CharDataTypeOptions: CharDataTypeOptions; RangeDataType: RangeDataType; DATE: DateDataTypeConstructor; ArrayDataTypeConstructor: ArrayDataTypeConstructor; DOUBLE: DoubleDataTypeConstructor; SmallIntegerDataType: SmallIntegerDataType; UUIDV1: AbstractDataTypeConstructor; FloatDataTypeOptions: FloatDataTypeOptions; RANGE: RangeDataTypeConstructor; HSTORE: AbstractDataTypeConstructor; TinyIntegerDataType: TinyIntegerDataType; BLOB: BlobDataTypeConstructor; CharDataTypeConstructor: CharDataTypeConstructor; RealDataTypeOptions: RealDataTypeOptions; DoubleDataType: DoubleDataType; VirtualDataTypeConstructor: VirtualDataTypeConstructor; DateDataTypeConstructor: DateDataTypeConstructor; TextLength: TextLength; UUID: AbstractDataTypeConstructor; StringDataTypeOptions: StringDataTypeOptions; JSON: AbstractDataTypeConstructor; EnumDataType: EnumDataType; DateOnlyDataType: DateOnlyDataType; GEOMETRY: GeometryDataTypeConstructor; DecimalDataType: DecimalDataType; DECIMAL: DecimalDataTypeConstructor; NumberDataTypeConstructor: NumberDataTypeConstructor; REAL: RealDataTypeConstructor; BlobDataTypeOptions: BlobDataTypeOptions; GeographyDataTypeOptions: GeographyDataTypeOptions; ABSTRACT: AbstractDataTypeConstructor; RealDataTypeConstructor: RealDataTypeConstructor; CharDataType: CharDataType; FloatDataType: FloatDataType; DateDataTypeOptions: DateDataTypeOptions; GeometryDataType: GeometryDataType; TinyIntegerDataTypeConstructor: TinyIntegerDataTypeConstructor; CHAR: CharDataTypeConstructor; StringDataTypeConstructor: StringDataTypeConstructor; CITEXT: AbstractDataTypeConstructor; ENUM: EnumDataTypeConstructor; NOW: AbstractDataTypeConstructor; DateDataType: DateDataType; IntegerDataTypeConstructor: IntegerDataTypeConstructor; TextDataTypeOptions: TextDataTypeOptions; StringDataType: StringDataType; INTEGER: IntegerDataTypeConstructor; GeometryDataTypeConstructor: GeometryDataTypeConstructor; RealDataType: RealDataType; MEDIUMINT: MediumIntegerDataTypeConstructor; AbstractDataTypeConstructor: AbstractDataTypeConstructor; RangeDataTypeOptions: RangeDataTypeOptions; NUMBER: NumberDataTypeConstructor; DateOnlyDataTypeConstructor: DateOnlyDataTypeConstructor; DATEONLY: DateOnlyDataTypeConstructor; DataTypeAbstract: DataTypeAbstract; AbstractDataType: AbstractDataType; BigIntDataType: BigIntDataType; DoubleDataTypeOptions: DoubleDataTypeOptions; INET: AbstractDataTypeConstructor; TextDataTypeConstructor: TextDataTypeConstructor; SMALLINT: SmallIntegerDataTypeConstructor; BOOLEAN: AbstractDataTypeConstructor; BIGINT: BigIntDataTypeConstructor; FloatDataTypeConstructor: FloatDataTypeConstructor; ArrayDataTypeOptions: ArrayDataTypeOptions; BigIntDataTypeConstructor: BigIntDataTypeConstructor; CIDR: AbstractDataTypeConstructor; TextDataType: TextDataType; MediumIntegerDataType: MediumIntegerDataType; JSONB: AbstractDataTypeConstructor; IntegerDataType: IntegerDataType; ARRAY: ArrayDataTypeConstructor; DoubleDataTypeConstructor: DoubleDataTypeConstructor; VIRTUAL: VirtualDataTypeConstructor; SmallIntegerDataTypeConstructor: SmallIntegerDataTypeConstructor; STRING: StringDataTypeConstructor; GeographyDataType: GeographyDataType; IntegerDataTypeOptions: IntegerDataTypeOptions; BlobDataType: BlobDataType; GeographyDataTypeConstructor: GeographyDataTypeConstructor; RangeableDataType: RangeableDataType; EnumDataTypeOptions: EnumDataTypeOptions; FLOAT: FloatDataTypeConstructor; DecimalDataTypeConstructor: DecimalDataTypeConstructor; TEXT: TextDataTypeConstructor; TINYINT: TinyIntegerDataTypeConstructor; AnyOperator: AnyOperator; Order: Order; SetOptions: SetOptions; Includeable: Includeable; AggregateOptions: AggregateOptions; InstanceUpdateOptions: InstanceUpdateOptions; WhereValue: WhereValue; AndOperator: AndOperator; Filterable: Filterable; WhereOptions: WhereOptions; Identifier: Identifier; OrOperator: OrOperator; ModelScopeOptions: ModelScopeOptions; Silent: Silent; BuildOptions: BuildOptions; ProjectionAlias: ProjectionAlias; OrderItem: OrderItem; BulkCreateOptions: BulkCreateOptions; RestoreOptions: RestoreOptions; CountOptions: CountOptions; InitOptions: InitOptions; IndexHintable: IndexHintable; FindAttributeOptions: FindAttributeOptions; SchemaOptions: SchemaOptions; TruncateOptions: TruncateOptions; InstanceDestroyOptions: InstanceDestroyOptions; Logging: Logging; IncrementDecrementOptions: IncrementDecrementOptions; ColumnOptions: ColumnOptions; Rangable: Rangable; Hookable: Hookable; Paranoid: Paranoid; ModelDefined: ModelDefined; Projectable: Projectable; ModelStatic: ModelStatic; DropOptions: DropOptions; IncludeThroughOptions: IncludeThroughOptions; ModelGetterOptions: ModelGetterOptions; ModelType: ModelType; ModelAttributeColumnOptions: ModelAttributeColumnOptions; CreateOptions: CreateOptions; ModelNameOptions: ModelNameOptions; ModelOptions: ModelOptions; ModelAttributes: ModelAttributes; CountWithOptions: CountWithOptions; ModelValidateOptions: ModelValidateOptions; ModelIndexesOptions: ModelIndexesOptions; Poolable: Poolable; FindOrCreateOptions: FindOrCreateOptions; AddScopeOptions: AddScopeOptions; InstanceRestoreOptions: InstanceRestoreOptions; FindOptions: FindOptions; AllOperator: AllOperator; GroupOption: GroupOption; SaveOptions: SaveOptions; DestroyOptions: DestroyOptions; NonNullFindOptions: NonNullFindOptions; IncludeOptions: IncludeOptions; ModelCtor: ModelCtor; ModelSetterOptions: ModelSetterOptions; SearchPathable: SearchPathable; UpdateOptions: UpdateOptions; IndexHint: IndexHint; WhereAttributeHash: WhereAttributeHash; WhereGeometryOptions: WhereGeometryOptions; Model: Model; Transactionable: Transactionable; WhereOperators: WhereOperators; ModelAttributeColumnReferencesOptions: ModelAttributeColumnReferencesOptions; UpsertOptions: UpsertOptions; FindAndCountOptions: FindAndCountOptions; ScopeOptions: ScopeOptions; IncrementDecrementOptionsWithBy: IncrementDecrementOptionsWithBy; Transaction: Transaction; LOCK: LOCK; TransactionOptions: TransactionOptions; Association: Association; AssociationOptions: AssociationOptions; AssociationScope: AssociationScope; MultiAssociationAccessors: MultiAssociationAccessors; SingleAssociationAccessors: SingleAssociationAccessors; ForeignKeyOptions: ForeignKeyOptions; ManyToManyOptions: ManyToManyOptions; BelongsTo: BelongsTo; BelongsToCreateAssociationMixinOptions: BelongsToCreateAssociationMixinOptions; BelongsToCreateAssociationMixin: BelongsToCreateAssociationMixin; BelongsToGetAssociationMixin: BelongsToGetAssociationMixin; BelongsToGetAssociationMixinOptions: BelongsToGetAssociationMixinOptions; BelongsToOptions: BelongsToOptions; BelongsToSetAssociationMixinOptions: BelongsToSetAssociationMixinOptions; BelongsToSetAssociationMixin: BelongsToSetAssociationMixin; HasOneGetAssociationMixinOptions: HasOneGetAssociationMixinOptions; HasOne: HasOne; HasOneSetAssociationMixinOptions: HasOneSetAssociationMixinOptions; HasOneOptions: HasOneOptions; HasOneCreateAssociationMixin: HasOneCreateAssociationMixin; HasOneSetAssociationMixin: HasOneSetAssociationMixin; HasOneGetAssociationMixin: HasOneGetAssociationMixin; HasOneCreateAssociationMixinOptions: HasOneCreateAssociationMixinOptions; HasManyCountAssociationsMixin: HasManyCountAssociationsMixin; HasManyCreateAssociationMixin: HasManyCreateAssociationMixin; HasManySetAssociationsMixin: HasManySetAssociationsMixin; HasManyGetAssociationsMixin: HasManyGetAssociationsMixin; HasManyAddAssociationMixinOptions: HasManyAddAssociationMixinOptions; HasManyHasAssociationMixin: HasManyHasAssociationMixin; HasMany: HasMany; HasManyOptions: HasManyOptions; HasManyHasAssociationMixinOptions: HasManyHasAssociationMixinOptions; HasManyCreateAssociationMixinOptions: HasManyCreateAssociationMixinOptions; HasManySetAssociationsMixinOptions: HasManySetAssociationsMixinOptions; HasManyGetAssociationsMixinOptions: HasManyGetAssociationsMixinOptions; HasManyRemoveAssociationMixin: HasManyRemoveAssociationMixin; HasManyRemoveAssociationMixinOptions: HasManyRemoveAssociationMixinOptions; HasManyAddAssociationsMixin: HasManyAddAssociationsMixin; HasManyCountAssociationsMixinOptions: HasManyCountAssociationsMixinOptions; HasManyRemoveAssociationsMixin: HasManyRemoveAssociationsMixin; HasManyHasAssociationsMixinOptions: HasManyHasAssociationsMixinOptions; HasManyRemoveAssociationsMixinOptions: HasManyRemoveAssociationsMixinOptions; HasManyAddAssociationMixin: HasManyAddAssociationMixin; HasManyAddAssociationsMixinOptions: HasManyAddAssociationsMixinOptions; HasManyHasAssociationsMixin: HasManyHasAssociationsMixin; BelongsToMany: BelongsToMany; BelongsToManyRemoveAssociationsMixin: BelongsToManyRemoveAssociationsMixin; BelongsToManyOptions: BelongsToManyOptions; BelongsToManyAddAssociationMixinOptions: BelongsToManyAddAssociationMixinOptions; BelongsToManyCreateAssociationMixin: BelongsToManyCreateAssociationMixin; BelongsToManyRemoveAssociationsMixinOptions: BelongsToManyRemoveAssociationsMixinOptions; BelongsToManyAddAssociationMixin: BelongsToManyAddAssociationMixin; BelongsToManyAddAssociationsMixinOptions: BelongsToManyAddAssociationsMixinOptions; BelongsToManyAddAssociationsMixin: BelongsToManyAddAssociationsMixin; BelongsToManyCreateAssociationMixinOptions: BelongsToManyCreateAssociationMixinOptions; BelongsToManyGetAssociationsMixin: BelongsToManyGetAssociationsMixin; ThroughOptions: ThroughOptions; BelongsToManyRemoveAssociationMixin: BelongsToManyRemoveAssociationMixin; BelongsToManyHasAssociationMixinOptions: BelongsToManyHasAssociationMixinOptions; BelongsToManyHasAssociationsMixin: BelongsToManyHasAssociationsMixin; BelongsToManyHasAssociationMixin: BelongsToManyHasAssociationMixin; BelongsToManyHasAssociationsMixinOptions: BelongsToManyHasAssociationsMixinOptions; JoinTableAttributes: JoinTableAttributes; BelongsToManyCountAssociationsMixin: BelongsToManyCountAssociationsMixin; BelongsToManySetAssociationsMixinOptions: BelongsToManySetAssociationsMixinOptions; BelongsToManyGetAssociationsMixinOptions: BelongsToManyGetAssociationsMixinOptions; BelongsToManyRemoveAssociationMixinOptions: BelongsToManyRemoveAssociationMixinOptions; BelongsToManyCountAssociationsMixinOptions: BelongsToManyCountAssociationsMixinOptions; BelongsToManySetAssociationsMixin: BelongsToManySetAssociationsMixin; ValidationError: ValidationError; DatabaseError: DatabaseError; UniqueConstraintErrorOptions: UniqueConstraintErrorOptions; UniqueConstraintError: UniqueConstraintError; CommonErrorProperties: CommonErrorProperties; ConnectionError: ConnectionError; EmptyResultError: EmptyResultError; TimeoutError: TimeoutError; InvalidConnectionError: InvalidConnectionError; BaseError: BaseError; AsyncQueueError: AsyncQueueError; ExclusionConstraintError: ExclusionConstraintError; AggregateError: AggregateError; HostNotFoundError: HostNotFoundError; HostNotReachableError: HostNotReachableError; OptimisticLockError: OptimisticLockError; ValidationErrorItem: ValidationErrorItem; SequelizeScopeError: SequelizeScopeError; ConnectionRefusedError: ConnectionRefusedError; AccessDeniedError: AccessDeniedError; ForeignKeyConstraintError: ForeignKeyConstraintError; ConnectionTimedOutError: ConnectionTimedOutError}}
 */


const Sequelize = require('sequelize');
const config = require('../config').database
exports.DataTypes = Sequelize
exports.Op = Sequelize.Op

//构建连接
exports.sequelize = new Sequelize.Sequelize(config.name,config.username,config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    // define: {
    //     timestamps: true,
    //     createdAt: "created_at",  //自定义时间戳
    //     updatedAt: "updated_at", // 自定义时间戳
    // },
    // timezone: '+08:00', //东八时区
});
