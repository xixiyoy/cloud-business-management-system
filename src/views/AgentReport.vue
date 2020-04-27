<template>
  <div class="agent-report">
    <div class="agent-header-custom">
        <el-row :gutter="20" class="header-custom">
          <el-col :span="3"><div class="grid-content bg-purple">
            <el-button>
              <img id="u829_img" class="img " src="../assets/images/account/u829.png">
              <span style="padding-left:10px;">导出</span>
            </el-button></div>
          </el-col>
          <el-col :span="13">
            <div class="block">
              <el-date-picker
                type="date"
                placeholder="统计年份">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <el-dropdown style="float:right;">
                <el-button>
                  请选择<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>全部</el-dropdown-item>
                  <el-dropdown-item>未申请</el-dropdown-item>
                  <el-dropdown-item>待确认</el-dropdown-item>
                  <el-dropdown-item>已确认</el-dropdown-item>
                  <el-dropdown-item>已驳回</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div>
                <el-input placeholder="请输入内容" class="input-with-select">
                  <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
          </el-col>
        </el-row>
    </div>
    <div class="agent-table-show">
      <el-tabs type="border-card" v-model="getAccountsForm.type" @tab-click="handelTabClick" class="agent-report-tabs">
        <el-tab-pane v-for="(tab, index) in accountLabels" :key="index" :label="tab.label" :name="tab.name">
          <el-table
            ref="multipleTable"
            :data="accounts.list"
            tooltip-effect="dark"
            style="width: 100%">
            <el-table-column
              type="selection"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="customerName"
              label="客户名称"
              :show-overflow-tooltip="true"
              header-align="center">
            </el-table-column>
            <el-table-column label="完成情况 (2020)"
                header-align="center"
                border="false">
              <el-table-column
                prop="province"
                label="1月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(1, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="city"
                label="2月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(2, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="3月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(3, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="4月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(4, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="5月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(5, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="6月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(6, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="7月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(7, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="8月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(8, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="9月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(9, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="10月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(10, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="11月"
                class-name="none-border">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(11, scope.row)"></i>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="12月">
                <template slot-scope="scope">
                  <i :class="getCompleteCircleClass(12, scope.row)"></i>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column
              prop="newestTask.relUserName"
              label="财税顾问"
              header-align="center">
            </el-table-column>
            <el-table-column
              prop="newestTask.relDeptName"
              label="部门"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="newestTask.price"
              label="月服务费"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="collectStatusName"
              label="收款状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="royaltyStatusName"
              label="提成状态"
              header-align="center"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              prop="operating"
              label="操作"
              header-align="center">
              <template slot-scope="scope">
                <el-dropdown @command="handleDealServiceCommand">
                  <span class="el-dropdown-link">
                    <el-button type="text" icon="el-icon-more"></el-button>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-if="isCanEdit(scope.row)" :command="'edit' + scope.row.customerId">编辑</el-dropdown-item>
                    <el-dropdown-item v-if="isCanView(scope.row)" :command="'view' + scope.row.customerId">查看</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-row :gutter="10" style="margin-top:20px;">
          <el-col :span="3">
            <i class="info"></i>未收款
          </el-col>
          <el-col :span="3">
            <i class="green"></i>已收款
          </el-col>
          <el-col :span="3">
            <i class="red"></i>已发提成
          </el-col>
        </el-row>
      </el-tabs>
      <div style="margin-top: 20px">
        <el-pagination
          background
          layout="total,prev, pager, next"
          @current-change="handleCurrentChangeClick"
          :current-page="getAccountsForm.page"
          :total="accounts.totalCount">
        </el-pagination>
      </div>
    </div>
    <!-- 未申请 0 未申请 0 提交弹窗-->
    <el-dialog title="提交收款" :visible.sync="zeroZeroEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户：">
              <el-input v-model="submitCollectionForm.payAccount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号：">
              <el-input v-model="submitCollectionForm.collectNo"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户：">
              <el-select
                v-model="submitCollectionForm.collectAccountId"
                @change="handleSubmitCollectCollectAccountSelectChange">
                <el-option
                  v-for="(collectAccount, index) in collectAccounts"
                  :key="index"
                  :label="collectAccount.accountName"
                  :value="collectAccount.tenantCollectAccountId">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数：" required>
            <div class="block">
              <el-date-picker
                v-model="submitCollectionDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期：" required>
              <div class="block">
                <el-date-picker
                  v-model="submitCollectionReceiveDate"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <el-input v-model="submitCollectionForm.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleZeroZeroEdit">确 定</el-button>
        <el-button @click="zeroZeroEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 提交收款后修改-->
    <el-dialog title="收款记录" :visible.sync="oneZeroSelfEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{collectDetail.collectStatusName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span>{{collectDetail.createUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span>{{collectDetail.payAccount}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span>{{collectDetail.collectNo}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span>{{collectDetail.collectDate}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span>{{ getReceiveMonth(collectDetail) }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审批人:" required>
              <span>{{collectDetail.approvalUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span>{{collectDetail.remark}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{collectDetail.createTime}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleOneZeroEditClick">修 改</el-button>
        <el-button type="primary" @click="oneZeroSelfEditVisible = false">取消</el-button>
        <!-- 1 0 提交者的修改的弹框start -->
        <el-dialog title="修改收款" :visible.sync="modifyOneZreoDialogFormVisible" append-to-body>
          <el-form>
            <el-row>
              <el-col :spam="12">
                <el-form-item label="付款账户：">
                  <el-input v-model="updateCollectForm.payAccount"></el-input>
                </el-form-item>
              </el-col>
              <el-col :spam="12">
                <el-form-item label="收据编号：">
                  <el-input v-model="updateCollectForm.collectNo"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :spam="12">
                <el-form-item label="收款账户：">
                  <el-select
                    v-model="updateCollectForm.collectAccountId"
                    @change="handleEditTaskFormAccountingAssistantSelectChange">
                    <el-option
                      v-for="(collectAccount, index) in collectAccounts"
                      :key="index"
                      :label="collectAccount.accountName"
                      :value="collectAccount.tenantCollectAccountId">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :spam="12">
                <el-form-item label="收款月数：" required>
                <div class="block">
                  <el-date-picker
                    v-model="updateCollectFormCollectMonth"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :spam="12">
                <el-form-item label="到账日期：" required>
                  <div class="block">
                    <el-date-picker
                      v-model="updateCollectionReceiveDate"
                      type="date"
                      placeholder="选择日期">
                    </el-date-picker>
                  </div>
                </el-form-item>
              </el-col>
              <el-col :spam="12">
                <el-form-item label="备注：">
                  <el-input v-model="updateCollectForm.remark"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="modifyCollect">确 定</el-button>
            <el-button @click="modifyOneZreoDialogFormVisible = false">取 消</el-button>
          </div>
        </el-dialog>
        <!-- 1 0 提交者的修改的弹框end -->
      </div>
    </el-dialog>
    <!-- 提交收款待审核后驳回 -->
    <el-dialog title="收款详情" :visible="oneZeroOtherEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{collectDetail.collectStatusName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span>{{collectDetail.createUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span>{{collectDetail.payAccount}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span>{{collectDetail.collectNo}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span>{{collectDetail.collectDate}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span>{{ getReceiveMonth(collectDetail) }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审批人:" required>
              <span>{{collectDetail.approvalUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span>{{collectDetail.remark}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{collectDetail.createTime}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleRejectCollect" type="danger">驳 回</el-button>
        <!-- 提交收款后的驳回操作start -->
        <el-dialog title="驳回收款" :visible.sync="rejectOneZeroVisible" append-to-body>
           <el-form>
            <el-form-item label="驳回备注">
              <el-input v-model="rejectCollectForm.rejectRemark"></el-input>
            </el-form-item>
           </el-form>
           <el-button @click="handleRejectCollectConfirm" type="primary">确认</el-button>
           <el-button @click="rejectOneZeroVisible = false">取 消</el-button>
        </el-dialog>
        <!-- 提交收款后的驳回操作end -->
        <el-button @click="handleConfirenCollect" type="primary" style="margin-left: 10px;">确认收款</el-button>
        <el-button @click="oneZeroOtherEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 驳回后展示-->
    <el-dialog title="收款记录" :visible.sync="twoZeroViewVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{collectDetail.collectStatusName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提交人:">
              <span>{{collectDetail.createUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="付款账户:">
              <span>{{collectDetail.payAccount}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收据编号:">
              <span>{{collectDetail.collectNo}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:">
              <span>{{collectDetail.collectDate}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:">
              <span>{{ getReceiveMonth(collectDetail) }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审批人:">
              <span>{{collectDetail.approvalUserName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span>{{collectDetail.remark}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="创建日期:">
              <span>{{collectDetail.createTime}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="twoZeroViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 待确认 1 未申请 0 提交收款待审核查看-->
    <el-dialog title="收款记录" :visible.sync="oneZeroViewVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{collectDetail.collectStatusName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="收款账户:" required>
              <span>{{collectDetail.collectAccountName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提交人:" required>
              <span>{{collectDetail.createUserName}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="付款账户:" required>
              <span>{{collectDetail.payAccount}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收据编号:" required>
              <span>{{collectDetail.collectNo}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="到账日期:" required>
              <span>{{collectDetail.collectDate}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="收款月数:" required>
              <span>{{ getReceiveMonth(collectDetail) }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="备注：">
              <span>{{collectDetail.remark}}</span>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="oneZeroViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交提成操作 -->
    <el-dialog title="提交提成" :visible="threeZeroEditVisible">
      <el-form>
        <el-form-item label="提成月数：" required>
              <div class="block">
              <el-date-picker
                v-model="submitRoyaltyFormMonths"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </div>
        </el-form-item>
        <el-form-item label="提成金额：">
          <el-input v-model="submitRoyaltyForm.royaltyMoney"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSubmitRoyalty">确 定</el-button>
        <el-button @click="threeZeroEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交提成后的查看可以修改 -->
    <el-dialog title="提交提成" :visible="treeOneEditVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span></span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程:
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSelfRoyaltyClick">修 改</el-button>
        <!-- 修改提成 start -->
        <el-dialog title="修改提成" :visible.sync="modifyRoyaltyDialogFormVisible" append-to-body>
          <el-form>
            <el-form-item label="提成月数：" required>
                  <div class="block">
                  <el-date-picker
                    v-model="modifyRoyaltyMonths"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </div>
            </el-form-item>
        <el-form-item label="提成金额：">
          <el-input v-model="updateRoyaltyForm.royaltyMoney"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleModifyRoyaltyClick">确 定</el-button>
        <el-button @click="modifyRoyaltyDialogFormVisible = false">取 消</el-button>
      </div>
        </el-dialog>
        <!-- 修改提成 end -->
        <el-button @click="treeOneEditVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 3 4 驳回后查看 -->
    <el-dialog title="提成记录">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span>{{ formatRoyaltyMonths(royaltyDetail) }}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批操作2 -->
    <el-dialog title="提成记录" :visible="threeOneBusinessVisible">
      <el-form>
        业务审批
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span>{{ getRoyaltyMonth(royaltyDetail) }}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleRejectRoyaltyClick">驳回</el-button>
        <!-- 提交收款后的驳回操作start -->
        <el-dialog title="驳回申请" :visible.sync="rejectThreeOneBusinessVisible" append-to-body>
           <el-form>
            <el-form-item label="驳回备注">
              <el-input v-model="rejectRoyaltyForm.rejectRemark"></el-input>
            </el-form-item>
           </el-form>
           <el-button @click="handleRejectRoyaltyConfirm" type="primary">确认</el-button>
           <el-button @click="rejectThreeOneBusinessVisible = false">取 消</el-button>
        </el-dialog>
        <!-- 提交收款后的驳回操作end -->
        <el-button type="primary" @click="handleConfirenBusiness" style="margin-left: 10px;">确认审批</el-button>
        <el-button @click="threeOneBusinessVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批操作3 -->
    <el-dialog title="提成记录" :visible="threeTwoFianceVisible">
      <el-form>
        财务审批
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span>{{ formatRoyaltyMonths(royaltyDetail) }}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}1111</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process" style="margin: 29px 0 0 -30px;"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleRejectRoyaltyClick" type="danger">驳 回</el-button>
        <!-- 提交收款后的驳回操作start -->
        <!-- <el-dialog title="驳回申请" :visible.sync="threeOneFianceVisible">
           <el-form>
            <el-form-item label="驳回备注">
              <el-input v-model="rejectRoyaltyForm.rejectRemark"></el-input>
            </el-form-item>
           </el-form>
           <el-button @click="handleRejectCollect" type="primary">确认</el-button>
           <el-button @click="rejectOneZeroVisible = false">取 消</el-button>
        </el-dialog> -->
        <!-- 提交收款后的驳回操作end -->
        <el-button type="primary" @click="handleConfirenFinancial" style="margin-left: 10px;">确认审批</el-button>
        <el-button @click="threeTwoFianceVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 提交收款确认后提交提成审批操作4 -->
    <el-dialog title="提成记录" :visible="threeThreeCashVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span>{{ formatRoyaltyMonths(royaltyDetail) }}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="handleRejectRoyaltyClick">驳回</el-button>
        <el-button type="primary" @click="handleCashier" style="margin-left: 10px;">确认审批</el-button>
        <el-button @click="threeThreeCashVisible = false">取 消</el-button>
      </div>
    </el-dialog>
    <!-- 已确认 3 已确认 5 所操作完成后查看的 -->
    <el-dialog title="提成记录" :visible="treeFiveViewVisible">
      <el-form>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="审核状态:">
              <span>{{royaltyDetail.royaltyStatusName}}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="提成金额:">
              <span>{{royaltyDetail.royaltyMoney}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :spam="12">
            <el-form-item label="提成月数:" required>
              <span>{{ getRoyaltyMonth(royaltyDetail) }}</span>
            </el-form-item>
          </el-col>
          <el-col :spam="12">
            <el-form-item label="创建日期:" required>
              <span>{{royaltyDetail.royaltyAppliDate}}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <span>审批流程:
            <div style="width:580px;float:right;">
              <!-- 动态获取 -->
              <div class="approval-process">
                    <div class="approval-one">
                      <div class="approval-content">
                        <p>申请提交</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyAppliUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyAppliUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyAppliUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyAppliDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-two">
                      <div class="approval-content">
                        <p>业务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyBusinessUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyBusinessUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyBusinessUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyBusinessDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-three">
                      <div class="approval-content">
                        <p>财务审批</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyFianceUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyFianceUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyFianceUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyFianceDate) }}</p>
                      </div>
                      <div class="time-line-process"></div>
                    </div>
                    <div class="approval-four">
                      <div class="approval-content">
                        <p>出纳确认</p>
                        <div class="approval">
                          <img v-if="!hasApproval(royaltyDetail.royaltyCashUserName)" class="wait-statu" src="../assets/images/agentReport/等待审核.png" alt="">
                          <i v-if="hasApproval(royaltyDetail.royaltyCashUserName)" class="el-icon-success" style="color:green;"></i><br>
                        </div>
                        <p>{{ royaltyDetail.royaltyCashUserName }}</p>
                        <p>{{ formatDate(royaltyDetail.royaltyCashDate) }}</p>
                      </div>
                    </div>
                  </div>
            </div>
          </span>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="treeFiveViewVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getLabels } from '../api/label'
import { mapState } from 'vuex'
import { Message } from 'element-ui'

export default {
  metaInfo: {
    title: '代帐报表'
  },
  data () {
    return {
      visible: false,
      submitCollectionDate: [],
      submitCollectionReceiveDate: '',
      customerId: '',
      // 提交收款信息
      submitCollectionForm: {
        collectAccountId: '',
        payAccount: '',
        collectNo: '',
        collectAccountName: '',
        collectDate: '',
        collectStartMonth: '',
        collectEndMonth: '',
        remark: '',
        customerId: ''
      },
      submitReceiveMonths: [],
      // 修改收款信息
      updateCollectFormCollectMonth: [],
      updateCollectionReceiveDate: '',
      updateCollectForm: {
        collectId: 1,
        payAccount: '',
        collectNo: '',
        collectAccountId: 1,
        collectAccountName: '',
        collectDate: '',
        collectStartMonth: '',
        collectEndMonth: '',
        remark: ''
      },
      modifyOneZreoDialogFormVisible: false,
      // 驳回收款表单
      rejectCollectForm: {
        collectId: '',
        rejectRemark: ''
      },
      rejectOneZeroVisible: false,
      // 缺人收款表单
      confirmReceiptForm: {
        collectId: ''
      },
      submitMonths: [],
      // 提交提成信息
      submitRoyaltyFormMonths: [],
      submitRoyaltyForm: {
        royaltyStartMonth: '',
        royaltyEndMonth: '',
        royaltyMoney: ''
      },
      rejectThreeOneBusinessVisible: false,
      // 修改提成信息
      modifyRoyaltyMonths: [],
      updateRoyaltyForm: {
        royaltyStartMonth: '',
        royaltyEndMonth: '',
        royaltyMoney: ''
      },
      modifyRoyaltyDialogFormVisible: false,
      // 驳回提成
      rejectRoyaltyForm: {
        royaltyId: '',
        rejectRemark: ''
      },
      // 以上是今天的代码
      zeroZeroEditVisible: false,
      oneZeroSelfEditVisible: false,
      oneZeroOtherEditVisible: false,
      twoZeroViewVisible: false,
      threeZeroEditVisible: false,
      treeFiveViewVisible: false,
      treeFourViewVisible: false,
      treeOneEditVisible: false,
      dialogFormVisible: false,
      threeOneBusinessVisible: false,
      threeTwoFianceVisible: false,
      threeThreeCashVisible: false,
      radio: 3,
      activeTabName: 'all',
      getAccountsForm: {
        type: '',
        limit: 10,
        page: 1,
        year: 2020
      },
      accountLabels: [],
      serivceCompleteVisible: false,
      submitReceiveViewVisible: false,
      submitReceiveEditVisible: false,
      oneZeroEditVisible: false,
      oneZeroViewVisible: false,
      oneZeroVisible: false,
      firstYiqueren: false,
      collectId: '',
      royaltyId: '',
      businessApprovalForm: {
        royaltyId: ''
      },
      // 财务审批
      financialApprovalForm: {
        royaltyId: ''
      },
      // 出纳审批
      cashierApprovalForm: {
        royaltyId: ''
      }
    }
  },
  methods: {
    isSelf () {
      return this.user.user.userId === this.createUserId
    },
    getUser () {
      this.$store.dispatch('getSysInfo')
    },
    // 判断是否可以编辑
    isCanEdit (customer) {
      const { collectStatusValue, royaltyStatusValue } = customer
      // 未申请 未申请 所有人都可以编辑
      if (collectStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '1') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '1') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '2') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '3') {
        return true
      }
    },
    getCollectAccountName (id) {
      return this.collectAccounts.filter(({ tenantCollectAccountId }) => id === tenantCollectAccountId)[0].accountName
    },
    handleSubmitCollectCollectAccountSelectChange (id) {
      this.submitCollectionForm.collectAccountName = this.getCollectAccountName(id)
    },
    handleOneZeroEditClick () {
      this.updateCollectForm.collectId = this.collectDetail.collectId
      this.updateCollectForm.payAccount = this.collectDetail.payAccount
      this.updateCollectForm.collectNo = this.collectDetail.collectNo
      this.updateCollectForm.collectAccountId = this.collectDetail.collectAccountId
      this.updateCollectForm.collectAccountName = this.collectDetail.collectAccountName
      this.updateCollectForm.remark = this.collectDetail.remark
      this.updateCollectionReceiveDate = new Date(this.collectDetail.collectDate)
      this.updateCollectFormCollectMonth.push(new Date(this.collectDetail.collectStartMonth), new Date(this.collectDetail.collectEndMonth))
      if (this.isSelf()) {
        this.oneZeroSelfEditVisible = false
        this.modifyOneZreoDialogFormVisible = true
      }
    },
    modifyCollect () {
      const startDate = this.updateCollectFormCollectMonth[0]
      const endDate = this.updateCollectFormCollectMonth[1]
      this.updateCollectForm.collectStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.updateCollectForm.collectEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
      const collectDate = this.updateCollectionReceiveDate
      this.updateCollectForm.collectDate = `${collectDate.getFullYear()}-${collectDate.getMonth() + 1}-${collectDate.getDay()}`
      this.zeroZeroEditVisible = false
      this.updateCollectForm.customerId = this.customerId
      this.updateCollect()
    },
    formatDate (date) {
      const theDate = new Date(date)
      const month = theDate.getMonth() + 1
      const day = theDate.getDay()
      return `${month} 月 ${day} 日`
    },
    // 判断是否可以查看
    isCanView (customer) {
      // const { collectStatusValue } = customer
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '2') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '5') {
        return true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '4') {
        return true
      }
    },
    getAccounts () {
      this.$store.dispatch('getAccounts', this.getAccountsForm)
    },
    getAccountLabels () {
      getLabels('account').then(({ data: accountLabels }) => {
        this.accountLabels = accountLabels.map(accountLabel => {
          const name = Object.keys(accountLabel)[0]
          const label = accountLabel[name]
          return {
            label,
            name
          }
        })
        this.getAccountsForm.type = this.accountLabels[0].name
      })
    },
    getAccountForTable (month, row) {
      return row.accountList.filter(account => new Date(account.currentMonth).getMonth() + 1 === month)[0] || null
    },
    getCompleteCircleClass (month, row) {
      const account = this.getAccountForTable(month, row)
      if (account === null) {
        return 'info'
      }
      return account.statusName === '已发提成' ? 'red' : 'green'
    },
    handleCurrentChangeClick (currentPage) {
      this.getAccountsForm.page = currentPage
      this.getAccounts()
    },
    handelTabClick () {
      this.getAccountsForm.page = 1
      this.getAccounts()
    },
    hasApproval (name) {
      return name !== null
    },
    handleDealServiceCommand (commandWithCustomerId) {
      if (commandWithCustomerId.startsWith('edit')) {
        const customerId = Number.parseInt(commandWithCustomerId.replace('edit', ''))
        const customer = this.getCustomer(customerId)
        this.collectId = customer.latestCollectId
        this.customerId = customer.customerId
        this.royaltyId = customer.latestRoyaltyId
        this.createUserId = customer.createUserId
        this.handleEditCommandClick(customer)
      } else {
        const customerId = Number.parseInt(commandWithCustomerId.replace('view', ''))
        const customer = this.getCustomer(customerId)
        this.collectId = customer.latestCollectId
        this.customerId = customer.customerId
        this.royaltyId = customer.latestRoyaltyId
        this.createUserId = customer.createUserId
        this.handleViewCommandClick(customer)
      }
    },
    getCustomer (id) {
      return this.accounts.list.filter(({ customerId }) => customerId === id)[0]
    },
    // 所有编辑
    handleEditCommandClick (customer) {
      console.log(customer)
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '0' && royaltyStatusValue === '0') {
        this.zeroZeroEditVisible = true
      }
      if (collectStatusValue === '1') {
        this.getCollectDetail()
        if (this.isSelf()) {
          this.oneZeroSelfEditVisible = true
        } else {
          this.oneZeroOtherEditVisible = true
        }
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        this.threeZeroEditVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '1') {
        this.getRoyaltyDetail()
        if (this.isSelf()) {
          this.treeOneEditVisible = true
        } else {
          this.threeOneBusinessVisible = true
        }
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '2') {
        this.getRoyaltyDetail()
        if (this.isSelf()) {
          this.treeOneEditVisible = true
        } else {
          this.threeTwoFianceVisible = true
        }
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '3') {
        this.getRoyaltyDetail()
        if (this.isSelf()) {
          this.treeOneEditVisible = true
        } else {
          this.threeThreeCashVisible = true
        }
      }
    },
    handleViewCommandClick (customer) {
      console.log(customer)
      const { collectStatusValue, royaltyStatusValue } = customer
      if (collectStatusValue === '2') {
        this.getCollectDetail()
        this.twoZeroViewVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '0') {
        this.getCollectDetail()
        this.twoZeroViewVisible = true
      }
      if (collectStatusValue === '3' && royaltyStatusValue === '4') {
        this.treeFourViewVisible = true
      }
      if ((collectStatusValue === '3' && royaltyStatusValue === '5') || (collectStatusValue === '3' && royaltyStatusValue === '4')) {
        this.getRoyaltyDetail()
        this.treeFiveViewVisible = true
      }
    },
    // 提交收款信息
    handleZeroZeroEdit () {
      const startDate = this.submitCollectionDate[0]
      const endDate = this.submitCollectionDate[1]
      this.submitCollectionForm.collectStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.submitCollectionForm.collectEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
      const collectDate = this.submitCollectionReceiveDate
      this.submitCollectionForm.collectDate = `${collectDate.getFullYear()}-${collectDate.getMonth() + 1}-${collectDate.getDay()}`
      this.zeroZeroEditVisible = false
      this.submitCollectionForm.customerId = this.customerId
      this.$store.dispatch('submitCollection', this.submitCollectionForm).then(() => {
        Message({
          message: '提交收款成功',
          type: 'success'
        })
        this.getAccounts()
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    formatRoyaltyMonths (royalty) {
      const { royaltyStartMonth, royaltyEndMonth } = royalty
      return `${royaltyStartMonth} - ${royaltyEndMonth}`
    },
    submitReceiveMonth () {
      const startDate = this.submitReceiveMonths[0]
      const endDate = this.submitReceiveMonths[1]
      this.submitCollectionForm.collectStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.submitCollectionForm.collectEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
    },
    // 修改收款信息
    updateCollect () {
      this.$store.dispatch('updateCollect', this.updateCollectForm).then(() => {
        Message({
          message: '修改收款信息成功',
          type: 'success'
        })
        this.getAccounts()
        this.modifyOneZreoDialogFormVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 获取收款详情
    getCollectDetail () {
      this.$store.dispatch('getCollectDetail', this.collectId)
    },
    getReceiveMonth (collectDetail) {
      const { collectStartMonth, collectEndMonth } = collectDetail
      const startDate = new Date(collectStartMonth)
      const endDate = new Date(collectEndMonth)
      const year = new Date(collectStartMonth).getFullYear()
      const startMonth = startDate.getMonth() + 1
      const endMonth = endDate.getMonth() + 1
      return `${year} 年 ${startMonth} 月 - ${endMonth} 月`
    },
    handleRejectCollect () {
      this.rejectCollectForm.collectId = this.collectId
      this.rejectCollectForm.rejectRemark = ''
      this.rejectOneZeroVisible = true
      this.oneZeroOtherEditVisible = false
    },
    handleRejectCollectConfirm () {
      this.rejectCollect()
    },
    // 驳回收款
    rejectCollect () {
      this.$store.dispatch('rejectCollection', this.rejectCollectForm).then(() => {
        Message({
          message: '驳回收款成功',
          type: 'success'
        })
        this.getAccounts()
        this.rejectOneZeroVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 确认收款
    handleConfirenCollect () {
      this.confirmReceiptForm.collectId = this.collectId
      this.confirmCollect()
      this.oneZeroOtherEditVisible = false
    },
    confirmCollect () {
      this.$store.dispatch('confirmReceipt', this.confirmReceiptForm).then(() => {
        Message({
          message: '确认收款成功',
          type: 'success'
        })
        this.getAccounts()
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 提交提成
    handleSubmitRoyalty () {
      const startDate = this.submitRoyaltyFormMonths[0]
      const endDate = this.submitRoyaltyFormMonths[1]
      this.submitRoyaltyForm.royaltyStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.submitRoyaltyForm.royaltyEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
      this.submitRoyaltyForm.customerId = this.customerId
      this.submitRoyalty()
    },
    submitRoyalty () {
      this.$store.dispatch('submitRoyalty', this.submitRoyaltyForm).then(() => {
        Message({
          message: '提交收款成功',
          type: 'success'
        })
        this.getAccounts()
        this.threeZeroEditVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    submitRoyaltyMonths () {
      const startDate = this.submitMonths[0]
      const endDate = this.submitMonths[1]
      this.submitRoyaltyForm.royaltyStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.submitRoyaltyForm.royaltyEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
    },
    // 获取提成详情
    getRoyaltyDetail () {
      this.$store.dispatch('getRoyaltyDetail', this.royaltyId)
    },
    getRoyaltyMonth (royaltyDetail) {
      const { royaltyStartMonth, royaltyEndMonth } = royaltyDetail
      const startDate = new Date(royaltyStartMonth)
      const endDate = new Date(royaltyEndMonth)
      const year = new Date(royaltyStartMonth).getFullYear()
      const startMonth = startDate.getMonth() + 1
      const endMonth = endDate.getMonth() + 1
      return `${year} 年 ${startMonth} 月 - ${endMonth} 月`
    },
    // 修改提成信息
    handleSelfRoyaltyClick () {
      this.modifyRoyaltyDialogFormVisible = true
      this.treeOneEditVisible = false
    },
    handleModifyRoyaltyClick () {
      const startDate = this.modifyRoyaltyMonths[0]
      const endDate = this.modifyRoyaltyMonths[1]
      this.updateRoyaltyForm.royaltyStartMonth = `${startDate.getFullYear()}-${startDate.getMonth() + 1}`
      this.updateRoyaltyForm.royaltyEndMonth = `${endDate.getFullYear()}-${endDate.getMonth() + 1}`
      this.updateRoyaltyForm.customerId = this.customerId
      this.updateRoyalty()
    },
    updateRoyalty () {
      this.$store.dispatch('updateRoyalty', this.updateRoyaltyForm).then(() => {
        Message({
          type: 'success',
          message: '修改提成信息成功'
        })
        this.getAccounts()
        this.modifyRoyaltyDialogFormVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 驳回提成审批
    handleRejectRoyaltyClick () {
      this.rejectRoyaltyForm.royaltyId = this.royaltyId
      this.threeOneBusinessVisible = false
      this.threeTwoFianceVisible = false
      this.rejectThreeOneBusinessVisible = true
    },
    handleRejectRoyaltyConfirm () {
      this.rejectRoyalty()
    },
    rejectRoyalty () {
      this.$store.dispatch('rejectRoyalty', this.rejectRoyaltyForm).then(() => {
        Message({
          message: '驳回提成成功',
          type: 'success'
        })
        this.getAccounts()
        this.rejectThreeOneBusinessVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 业务审批
    handleConfirenBusiness () {
      this.businessApprovalForm.royaltyId = this.royaltyId
      this.businessApproval()
    },
    businessApproval () {
      this.$store.dispatch('businessApproval', this.businessApprovalForm).then(() => {
        Message({
          message: '确认成功',
          type: 'success'
        })
        this.getAccounts()
        this.threeOneBusinessVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 财务审批
    handleConfirenFinancial () {
      this.financialApprovalForm.royaltyId = this.royaltyId
      this.financialApproval()
    },
    financialApproval () {
      this.$store.dispatch('financialApproval', this.financialApprovalForm).then(() => {
        Message({
          message: '确认成功',
          type: 'success'
        })
        this.getAccounts()
        this.threeTwoFianceVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 出纳审批
    handleCashier () {
      this.cashierApprovalForm.royaltyId = this.royaltyId
      this.cashierApproval()
    },
    cashierApproval () {
      this.$store.dispatch('cashierApproval', this.cashierApprovalForm).then(() => {
        Message({
          message: '确认成功',
          type: 'success'
        })
        this.getAccounts()
        this.threeThreeCashVisible = false
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 获取收款列表里的收款账户
    getCollectAccounts () {
      this.$store.dispatch('getTenantAccountList').then(() => {
        console.log(this.collectAccounts)
      }).catch(message => {
        Message({
          type: 'error',
          message
        })
      })
    },
    handleEditTaskFormAccountingAssistantSelectChange (id) {
      this.getTenantAccountListForm.accountName = this.submitCollectionForm.collectAccountId
      this.submitCollectionForm.collectAccountName = this.getCollectAccounts(id)
    }
  },
  mounted () {
    this.getAccountLabels()
    this.getAccounts()
    // 获取收款账户
    this.getCollectAccounts()
    this.getUser()
    this.getCollectAccount()
  },
  computed: {
    ...mapState({
      accounts: state => state.account.accounts,
      // 收款信息展示
      collectDetail: state => state.account.collectDetail,
      // 提成信息展示
      royaltyDetail: state => state.account.royaltyDetail,
      // 获取收款列表里的收款账户
      collectAccounts: state => state.tenantCollectAccount.tenantAccounts,
      getCollectAccount: state => state.tenantCollectAccount.tenantAccount,
      user: state => state.sysUser.user
    })
  }
}
</script>

<style lang="scss">
.agent-report{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.agent-header-custom{
  width: 100%;
}
.agent-table-show{
  margin-top: 20px;
}
.agent-report-tabs .el-tabs__content {
  padding: none;
}
.none-border {
  border-right: 0px solid #EBEEF5 !important;
}

.green {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#67C23A;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.blue {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#409EFF;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.red {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:red;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.warn {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#E6A23C;
  margin: 2px 5px 0 0px;
  display: inline-block;
}
.info {
  width:15px;
  height:15px;
  border-radius:50%;
  background-color:#fff;
  margin: 2px 5px 0 0px;
  display: inline-block;
  border:1px solid rgb(232, 232, 232);
}
// 提成流程展示部分
.approval-one{
  width: 157px;
  text-align: center;
  display: inline-block;
  }
.approval-two{
  width:157px;
  text-align: center;
  display: inline-block;
  margin-left: -40px;
  }
.approval-three{
  width: 157px;
  text-align: center;
  display: inline-block;
  margin-left: -39px;
  }
.approval-four{
  width: 157px;
  text-align: center;
  display: inline-block;
  margin-left: -44px;
  }
.time-line-process{
    width: 100px;
    height: 1px;
    background-color: #606266;
    float: left;
    margin: 30px 0 0 -20px;
}
.approval-content{
    float: left;
}
/* 等待的图标 */
.wait-statu{
  width: 14px;
  height: 14px;
}
/* 完成的图标 */
.approval{
  display: block;
}
</style>
